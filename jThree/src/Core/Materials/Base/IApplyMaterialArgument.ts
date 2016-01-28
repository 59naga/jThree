import Camera from "../../Camera/Camera";
import RenderStageBase from "../../Renderers/RenderStages/RenderStageBase";
import ResolvedChainInfo from "../../Renderers/ResolvedChainInfo";
import SceneObject from "../../SceneObjects/SceneObject";
import Scene from "../../Scene";
interface IApplyMaterialArgument {
  scene: Scene;
  camera: Camera;
  renderStage: RenderStageBase;
  object: SceneObject;
  textureResource: ResolvedChainInfo;
  techniqueIndex: number;
  techniqueCount: number;
  passIndex: number;
  passCount: number;
}

export default IApplyMaterialArgument;
