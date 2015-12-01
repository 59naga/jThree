import Vector3 = require('../../../Math/Vector3');
import LightBase = require('./../LightBase');
import Scene = require('../../Scene');
import Matrix = require('../../../Math/Matrix');
import LightTypeDeclaration = require("./../LightTypeDeclaration");
import BasicRenderer = require("../../Renderers/BasicRenderer");
import BufferTexture = require("../../Resources/Texture/BufferTexture");
import TextureGenerater = require("../../Renderers/TextureGenerater");
import GeneraterInfoChunk = require("../../Renderers/TextureGeneraters/GeneraterInfoChunk");
class ShadowDroppableLight extends LightBase {
	constructor(scene: Scene) {
		super(scene);
    }

 public updateLightMatricis(renderer:BasicRenderer)
 {

 }

 protected updateLightProjection(renderer:BasicRenderer,shadowMatrix:Matrix)
 {
	 this.matLightViewProjection = shadowMatrix;
 }

 /**
　* The matrix that projects world space to light projection space.
  */
  public matLightViewProjection:Matrix = Matrix.identity();

  /**
   * Parameter for identify whether shadow droppable light or not.
   */
  public isShadowDroppable = true;
}

export = ShadowDroppableLight;
