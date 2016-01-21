import RSMLRenderStage = require("../RenderStages/RSML/RSMLRenderStage");
﻿import GeneraterInfo = require("../TextureGeneraters/GeneraterInfoChunk");
import RenderStageChain = require("../RenderStageChain");
import BasicRenderer = require("../BasicRenderer");
import ConfiguratorBase = require("./RendererConfiguratorBase");
import HitAreaRenderStage = require("../RenderStages/HitAreaRenderStage");
class BasicRendererConfigurator extends ConfiguratorBase {
  public get TextureBuffers(): GeneraterInfo[] {
    return [
      {
        name: "gbuffer.primary",
        generater: "rendererfit",
        internalFormat: "RGBA",
        element: "FLOAT"
      },
      {
        name: "light.diffuse",
        generater: "rendererfit",
        internalFormat: "RGB",
        element: "UBYTE"
      },
      {
        name: "light.specular",
        generater: "rendererfit",
        internalFormat: "RGB",
        element: "UBYTE"
      },
      {
        name: "hitarea",
        generater: "rendererfit",
        internalFormat: "RGBA",
        element: "UBYTE"
      }
    ];
  }

  public getStageChain(target: BasicRenderer): RenderStageChain[] {
    return [
      {
        buffers:
        {
          OUT: "hitarea"
        },
        stage: new HitAreaRenderStage(target)
      },
      {
        buffers: {
          PRIMARY: "gbuffer.primary"
        },
        stage: new RSMLRenderStage(target, require("../RenderStages/BuiltIn/GBuffer.html"))
      },
      {
        buffers: {
          PRIMARY: "gbuffer.primary",
          DIFFUSE: "light.diffuse",
          SPECULAR: "light.specular"
        },
        stage: new RSMLRenderStage(target, require("../RenderStages/BuiltIn/LightAccumulationStage.html"))
      },
      {
        buffers: {
          DLIGHT: "light.diffuse",
          SLIGHT: "light.specular",
          OUT: "default"
        },
        stage: new RSMLRenderStage(target, require("../RenderStages/BuiltIn/ForwardShading.html"))
      }];
    // },
    // {
    //   buffers: {
    //     PRIMARY: "gbuffer.primary",
    //     MAIN: "main",
    //     OUT: "default"
    //   },
    //   stage: new RSMLRenderStage(target, require("../RenderStages/BuiltIn/DistanceFog.html"))
    // }];
  }
}

export = BasicRendererConfigurator;
