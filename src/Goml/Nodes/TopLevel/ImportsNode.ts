import OrderedTopLevelNodeBase from "./OrderedTopLevelNodeBase";

class CanvasesNode extends OrderedTopLevelNodeBase {
  protected groupPrefix: string = "import";

  constructor() {
    super();
  }

  public get loadPriorty(): number {
    return 0;
  }

}

export default CanvasesNode;
