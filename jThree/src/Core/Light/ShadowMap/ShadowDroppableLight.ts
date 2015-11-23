import Vector3 = require('../../../Math/Vector3');
import LightBase = require('./../LightBase');
import Scene = require('../../Scene');
import Matrix = require('../../../Math/Matrix');
import LightTypeDeclaration = require("./../LightTypeDeclaration");
import RendererBase = require("../../Renderers/RendererBase");
import BufferTexture = require("../../Resources/Texture/BufferTexture");
import TextureGenerater = require("../../Renderers/TextureGenerater");
import GeneraterInfoChunk = require("../../Renderers/TextureGeneraters/GeneraterInfoChunk");
class ShadowDroppableLight extends LightBase {
	constructor(scene: Scene) {
		super(scene);
    }

 public updateLightMatricis(renderer:RendererBase)
 {

 }

 protected updateLightProjection(renderer:RendererBase,lightView:Matrix,lightProjection:Matrix)
 {
	 this.matLightViewProjection = Matrix.multiply(lightView,lightProjection);
	 this.matLightView = lightView;
 }

 /**
　* The matrix that projects world space to light projection space.
  */
  public matLightViewProjection:Matrix = Matrix.identity();

  /**
   * The matrix that projects light projection space to view space.
   */
  public matLightView:Matrix=Matrix.identity();

  /**
   * Parameter for identify whether shadow droppable light or not.
   */
  public isShadowDroppable = true;
}

export = ShadowDroppableLight;
