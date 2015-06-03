import JThreeObject = require("../../Base/JThreeObject");
import ContextManagerBase = require("../ContextManagerBase");
import Delegates = require("../../Delegates");
import Exceptions = require("../../Exceptions");
import JThreeContext = require("../JThreeContext");
import CanvasListChangedEventArgs = require("../CanvasListChangedEventArgs");
import ListStateChangedType = require("../ListStateChangedType");
import JThreeCollection = require('../../Base/JThreeCollection');
import AssociativeArray = require('../../Base/Collections/AssociativeArray');
import ResourceWrapper = require('./ResourceWrapper');
class ContextSafeResourceContainer<T extends ResourceWrapper> extends JThreeObject
{
    private context: JThreeContext = null;

    constructor(context:JThreeContext) {
        super();
        this.context = context;
        //Initialize resources for the renderers already subscribed.
        this.context.CanvasManagers.forEach((v) => {
            this.cachedObject.set(v.ID, this.getInstanceForRenderer(v));
        });
        this.context.onRendererChanged(this.rendererChanged);
    }

    private cachedObject: AssociativeArray<T> = new AssociativeArray<T>();

    public getForRenderer(contextManager: ContextManagerBase): T {
        return this.getForRendererID(contextManager.ID);
    }

    public getForRendererID(id: string): T {
        if (!this.cachedObject.has(id))console.log("There is no matching object with the ID:"+id);
        return this.cachedObject.get(id);
    }

    protected each(act: Delegates.Action1<T>): void {
        this.cachedObject.forEach(((v, i, a) => {
            act(v);
        }));
    }

    private rendererChanged(object:any,arg:CanvasListChangedEventArgs): void {
        switch (arg.ChangeType) {
            case ListStateChangedType.Add:
                this.cachedObject.set(arg.AffectedRenderer.ID, this.getInstanceForRenderer(arg.AffectedRenderer));
                break;
            case ListStateChangedType.Delete:
                var delTarget: T = this.cachedObject.get(arg.AffectedRenderer.ID);
                this.cachedObject.delete(arg.AffectedRenderer.ID);
                this.disposeResource(delTarget);
                break;
        }
    }

    protected getInstanceForRenderer(renderer:ContextManagerBase): T {
        throw new Exceptions.AbstractClassMethodCalledException();
    }

    protected disposeResource(resource: T): void {
        throw new Exceptions.AbstractClassMethodCalledException();
    }
}

export=ContextSafeResourceContainer;
