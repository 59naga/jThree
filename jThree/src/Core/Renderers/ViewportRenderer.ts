import Rectangle = require("../../Math/Rectangle");
import Color4 = require("../../Base/Color/Color4");
import RendererBase = require("./RendererBase");
import ContextManagerBase = require("./../ContextManagerBase");
import Delegates = require("../../Base/Delegates");
import ClearTargetType = require("../../Wrapper/ClearTargetType");
import jThreeObject = require("../../Base/JThreeObject");
import Camera = require("./../Camera/Camera");
import Material = require('./../Materials/Material');
import SceneObject = require('./../SceneObject');
import RenderStageBase = require('./RenderStages/RenderStageBase');
import FowardShadingStage = require('./RenderStages/FowardShadingStage');
import JThreeEvent = require('../../Base/JThreeEvent');
class ViewPortRenderer extends RendererBase {
    constructor(contextManager: ContextManagerBase, viewportArea: Rectangle) {
        super(contextManager);
        this.viewportArea = viewportArea;
    }

    private viewportArea: Rectangle;

    public get ViewPortArea(): Rectangle {
        return this.viewportArea;
    }

    public set ViewPortArea(area: Rectangle) {
        if (!Rectangle.Equals(area, this.viewportArea)) {
            this.viewportArea = area;
            this.onResizeHandler.fire(this,area);
        }

    }

    applyViewportConfigure(): void {
        this.ContextManager.Context.ViewPort(this.viewportArea.Left, this.viewportArea.Top, this.viewportArea.Width, this.viewportArea.Height);
    }

    beforeRender() {
        super.beforeRender();
        this.applyViewportConfigure();
    }

    afterRender() {
        this.ContextManager.Context.Flush();
        super.afterRender();
    }

    public configureRenderer() {
        this.applyViewportConfigure();
    }
}

export =ViewPortRenderer;