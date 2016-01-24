import StageChainTemplate = require("../StageChainTemplate");
﻿import GeneraterInfo = require("../TextureGeneraters/GeneraterInfoChunk");
import BasicRenderer = require("../BasicRenderer");
import ConfiguratorBase = require("./RendererConfiguratorBase");
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
      },
      {
        name: "main",
        generater: "rendererfit",
        internalFormat: "RGBA",
        element: "UBYTE"
      }
    ];
  }

  public getStageChain(target: BasicRenderer): StageChainTemplate[] {
    return [
      {
        buffers:
        {
          OUT: "hitarea"
        },
        stage: "jthree.hitarea"
      },
      {
        buffers: {
          PRIMARY: "gbuffer.primary"
        },
        stage: "jthree.basic.gbuffer"
      },
      {
        buffers: {
          PRIMARY: "gbuffer.primary",
          DIFFUSE: "light.diffuse",
          SPECULAR: "light.specular"
        },
        stage: "jthree.basic.light"
      },
      {
        buffers: {
          DLIGHT: "light.diffuse",
          SLIGHT: "light.specular",
          OUT: "main"
        },
        stage: "jthree.basic.foward"
      },
      {
       buffers: {
         MAIN: "main",
         PRIMARY: "gbuffer.primary",
         OUT: "default"
       },
       stage: "jthree.basic.distanceFog"
      }];
  }
}

export = BasicRendererConfigurator;
