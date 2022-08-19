 tsParticles.load("tsparticles", {
    "style":{
        "position": "absolute"
       },
    "background": {
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "fullScreen": {
    "zIndex": 0
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onDiv": {
        "selectors": "#repulse-div",
        "mode": "repulse"
      },
      "onHover": {
        "enable": true,
        "mode": "bubble",
        "parallax": {
          "force": 60
        }
      }
    },
    "modes": {
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 30,
        "speed": 1
      },
      "bounce": {
        "distance": 100
      },
      "bubble": {
        "distance": 400,
        "duration": 2,
        "mix": false,
        "opacity": 0.8,
        "size": 40,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 2
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": []
        }
      },
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      }
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 3
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 1
      },
      "animation": {
        "enable": true,
        "speed": 1,
        "minimumValue": 0.2
      }
    },
    "rotate": {
      "random": {
        "enable": true
      },
      "animation": {
        "enable": true,
        "speed": 5
      },
      "direction": "random"
    },
    "shape": {
      "options": {
        "character": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "char": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "polygon": {
          "sides": 5
        },
        "star": {
          "sides": 5
        },
        "image": [
          
          
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62fd10f0f183d8a07996baa4_Vector-3.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62fd10f0cfc39bf17adb917d_Vector-2.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62fd10f012c56d4037060b55_Vector-4.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62fd10f0fd589eca364785e1_Vector-1.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62fd10f06fc4c09b6dfe5ee1_Vector.png",
            "width": 900,
            "height": 900
          }
        ],
        "images": [
          
         
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62fd10f0f183d8a07996baa4_Vector-3.png",
            "width": 700,
            "height": 700
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62fd10f0cfc39bf17adb917d_Vector-2.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62fd10f012c56d4037060b55_Vector-4.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62fd10f0fd589eca364785e1_Vector-1.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62fd10f06fc4c09b6dfe5ee1_Vector.png",
            "width": 900,
            "height": 900
          }
          
        ]
      },
      "type": "image"
    },
    "size": {
      "value": 200,
      "animation": {
        "speed": 40,
        "minimumValue": 0.1
      }
    },
    "stroke": {
      "color": {
        "value": "#000000",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          }
        }
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "sync": false
      },
      "duration": {
        "random": {
          "enable": false,
          "minimumValue": 0.0001
        },
        "value": 0,
        "sync": false
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#000"
      },
      "consent": false,
      "distance": 150,
      "enable": false,
      "frequency": 1,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  }

});

tsParticles.load("particlesone", {
    "style":{
        "position": "relative"
       },
    "background": {
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "fullScreen": {
    "zIndex": 0
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onDiv": {
        "selectors": "#repulse-div",
        "mode": "repulse"
      },
      "onHover": {
        "enable": true,
        "mode": "bubble",
        "parallax": {
          "force": 60
        }
      }
    },
    "modes": {
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 30,
        "speed": 1
      },
      "bounce": {
        "distance": 100
      },
      "bubble": {
        "distance": 400,
        "duration": 2,
        "mix": false,
        "opacity": 0.8,
        "size": 40,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 2
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": []
        }
      },
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      }
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 3
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 1
      },
      "animation": {
        "enable": true,
        "speed": 1,
        "minimumValue": 0.2
      }
    },
    "rotate": {
      "random": {
        "enable": true
      },
      "animation": {
        "enable": true,
        "speed": 5
      },
      "direction": "random"
    },
    "shape": {
      "options": {
        "character": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "char": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "polygon": {
          "sides": 5
        },
        "star": {
          "sides": 5
        },
        "image": [
          
          
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffa9d7e804dba2bfdd5a07_Vector-1.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffa9d724a92955d0446116_Vector-3.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffa9d7f0112d10ee01117b_Vector.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffa9d7a26efec8812b2728_Vector-2.png",
            "width": 900,
            "height": 900
          }
        ],
        "images": [
          
         
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffa9d7e804dba2bfdd5a07_Vector-1.png",
            "width": 700,
            "height": 700
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffa9d724a92955d0446116_Vector-3.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffa9d7f0112d10ee01117b_Vector.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffa9d7a26efec8812b2728_Vector-2.png",
            "width": 900,
            "height": 900
          }
          
        ]
      },
      "type": "image"
    },
    "size": {
      "value": 200,
      "animation": {
        "speed": 40,
        "minimumValue": 0.1
      }
    },
    "stroke": {
      "color": {
        "value": "#000000",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          }
        }
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "sync": false
      },
      "duration": {
        "random": {
          "enable": false,
          "minimumValue": 0.0001
        },
        "value": 0,
        "sync": false
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#000"
      },
      "consent": false,
      "distance": 150,
      "enable": false,
      "frequency": 1,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  }

});

tsParticles.load("particlestwo", {
    "style":{
        "position": "relative"
       },
    "background": {
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "fullScreen": {
    "zIndex": 0
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onDiv": {
        "selectors": "#repulse-div",
        "mode": "repulse"
      },
      "onHover": {
        "enable": true,
        "mode": "bubble",
        "parallax": {
          "force": 60
        }
      }
    },
    "modes": {
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 30,
        "speed": 1
      },
      "bounce": {
        "distance": 100
      },
      "bubble": {
        "distance": 400,
        "duration": 2,
        "mix": false,
        "opacity": 0.8,
        "size": 40,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 2
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": []
        }
      },
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      }
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 3
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 1
      },
      "animation": {
        "enable": true,
        "speed": 1,
        "minimumValue": 0.2
      }
    },
    "rotate": {
      "random": {
        "enable": true
      },
      "animation": {
        "enable": true,
        "speed": 5
      },
      "direction": "random"
    },
    "shape": {
      "options": {
        "character": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "char": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "polygon": {
          "sides": 5
        },
        "star": {
          "sides": 5
        },
        "image": [
          
          
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffab5ce3cca38044ae2de9_Vector-1.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffab5ca26efef8af2b2c35_Vector-3.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffab5ce0b6dd43aa589d8c_Vector-2.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffab5c9d741589fc908027_Vector.png",
            "width": 900,
            "height": 900
          }
        ],
        "images": [
          
         
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffab5ce3cca38044ae2de9_Vector-1.png",
            "width": 700,
            "height": 700
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffab5ca26efef8af2b2c35_Vector-3.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffab5ce0b6dd43aa589d8c_Vector-2.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffab5c9d741589fc908027_Vector.png",
            "width": 900,
            "height": 900
          }
          
        ]
      },
      "type": "image"
    },
    "size": {
      "value": 200,
      "animation": {
        "speed": 40,
        "minimumValue": 0.1
      }
    },
    "stroke": {
      "color": {
        "value": "#000000",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          }
        }
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "sync": false
      },
      "duration": {
        "random": {
          "enable": false,
          "minimumValue": 0.0001
        },
        "value": 0,
        "sync": false
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#000"
      },
      "consent": false,
      "distance": 150,
      "enable": false,
      "frequency": 1,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  }

});

tsParticles.load("particlesthree", {
    "style":{
        "position": "relative"
       },
    "background": {
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "fullScreen": {
    "zIndex": 0
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onDiv": {
        "selectors": "#repulse-div",
        "mode": "repulse"
      },
      "onHover": {
        "enable": true,
        "mode": "bubble",
        "parallax": {
          "force": 60
        }
      }
    },
    "modes": {
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 30,
        "speed": 1
      },
      "bounce": {
        "distance": 100
      },
      "bubble": {
        "distance": 400,
        "duration": 2,
        "mix": false,
        "opacity": 0.8,
        "size": 40,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 2
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": []
        }
      },
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      }
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 3
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 1
      },
      "animation": {
        "enable": true,
        "speed": 1,
        "minimumValue": 0.2
      }
    },
    "rotate": {
      "random": {
        "enable": true
      },
      "animation": {
        "enable": true,
        "speed": 5
      },
      "direction": "random"
    },
    "shape": {
      "options": {
        "character": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "char": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "polygon": {
          "sides": 5
        },
        "star": {
          "sides": 5
        },
        "image": [
          
          
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffac53767b3ac9c9657234_Vector.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffac53f4dbe271844292a9_Vector-1.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffac53e3cca3491bae369f_Vector-2.png",
            "width": 900,
            "height": 900
          }
        ],
        "images": [
          
         
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffac53767b3ac9c9657234_Vector.png",
            "width": 700,
            "height": 700
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffac53f4dbe271844292a9_Vector-1.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffac53e3cca3491bae369f_Vector-2.png",
            "width": 900,
            "height": 900
          }
          
        ]
      },
      "type": "image"
    },
    "size": {
      "value": 200,
      "animation": {
        "speed": 40,
        "minimumValue": 0.1
      }
    },
    "stroke": {
      "color": {
        "value": "#000000",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          }
        }
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "sync": false
      },
      "duration": {
        "random": {
          "enable": false,
          "minimumValue": 0.0001
        },
        "value": 0,
        "sync": false
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#000"
      },
      "consent": false,
      "distance": 150,
      "enable": false,
      "frequency": 1,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  }

});

tsParticles.load("particlesfour", {
    "style":{
        "position": "relative"
       },
    "background": {
    "position": "50% 50%",
    "repeat": "no-repeat",
    "size": "cover"
  },
  "fullScreen": {
    "zIndex": 0
  },
  "interactivity": {
    "events": {
      "onClick": {
        "enable": true,
        "mode": "push"
      },
      "onDiv": {
        "selectors": "#repulse-div",
        "mode": "repulse"
      },
      "onHover": {
        "enable": true,
        "mode": "bubble",
        "parallax": {
          "force": 60
        }
      }
    },
    "modes": {
      "attract": {
        "distance": 200,
        "duration": 0.4,
        "easing": "ease-out-quad",
        "factor": 1,
        "maxSpeed": 30,
        "speed": 1
      },
      "bounce": {
        "distance": 100
      },
      "bubble": {
        "distance": 400,
        "duration": 2,
        "mix": false,
        "opacity": 0.8,
        "size": 40,
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "mix": false,
          "selectors": []
        }
      },
      "connect": {
        "distance": 80,
        "links": {
          "opacity": 0.5
        },
        "radius": 60
      },
      "grab": {
        "distance": 400,
        "links": {
          "blink": false,
          "consent": false,
          "opacity": 1
        }
      },
      "push": {
        "default": true,
        "groups": [],
        "quantity": 2
      },
      "remove": {
        "quantity": 2
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4,
        "factor": 100,
        "speed": 1,
        "maxSpeed": 50,
        "easing": "ease-out-quad",
        "divs": {
          "distance": 200,
          "duration": 0.4,
          "factor": 100,
          "speed": 1,
          "maxSpeed": 50,
          "easing": "ease-out-quad",
          "selectors": []
        }
      },
      "trail": {
        "delay": 1,
        "pauseOnStop": false,
        "quantity": 1
      },
      "light": {
        "area": {
          "gradient": {
            "start": {
              "value": "#ffffff"
            },
            "stop": {
              "value": "#000000"
            }
          },
          "radius": 1000
        },
        "shadow": {
          "color": {
            "value": "#000000"
          },
          "length": 2000
        }
      }
    }
  },
  "particles": {
    "color": {
      "value": "#ffffff"
    },
    "move": {
      "attract": {
        "rotate": {
          "x": 600,
          "y": 1200
        }
      },
      "enable": true,
      "outModes": {
        "bottom": "out",
        "left": "out",
        "right": "out",
        "top": "out"
      }
    },
    "number": {
      "density": {
        "enable": true
      },
      "value": 3
    },
    "opacity": {
      "random": {
        "enable": true
      },
      "value": {
        "min": 0.1,
        "max": 1
      },
      "animation": {
        "enable": true,
        "speed": 1,
        "minimumValue": 0.2
      }
    },
    "rotate": {
      "random": {
        "enable": true
      },
      "animation": {
        "enable": true,
        "speed": 5
      },
      "direction": "random"
    },
    "shape": {
      "options": {
        "character": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "char": {
          "fill": false,
          "font": "Verdana",
          "style": "",
          "value": "*",
          "weight": "400"
        },
        "polygon": {
          "sides": 5
        },
        "star": {
          "sides": 5
        },
        "image": [
          
          
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffac53767b3ac9c9657234_Vector.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffad07a99af5ea2379eba6_Vector-2.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffad07dbfce79e1aa82bef_Vector.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffad07b946fc45c17aab51_Vector-1.png",
            "width": 900,
            "height": 900
          }
        ],
        "images": [
          
         
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffad07767b3a6f3b657aed_Vector-3.png",
            "width": 700,
            "height": 700
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffad07a99af5ea2379eba6_Vector-2.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffad07dbfce79e1aa82bef_Vector.png",
            "width": 900,
            "height": 900
          },
          {
            "src": "https://uploads-ssl.webflow.com/62f564030a4192526c215013/62ffad07b946fc45c17aab51_Vector-1.png",
            "width": 900,
            "height": 900
          }
          
        ]
      },
      "type": "image"
    },
    "size": {
      "value": 200,
      "animation": {
        "speed": 40,
        "minimumValue": 0.1
      }
    },
    "stroke": {
      "color": {
        "value": "#000000",
        "animation": {
          "h": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          },
          "s": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          },
          "l": {
            "count": 0,
            "enable": false,
            "offset": 0,
            "speed": 1,
            "decay": 0,
            "sync": true
          }
        }
      }
    },
    "life": {
      "count": 0,
      "delay": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "sync": false
      },
      "duration": {
        "random": {
          "enable": false,
          "minimumValue": 0.0001
        },
        "value": 0,
        "sync": false
      }
    },
    "roll": {
      "darken": {
        "enable": false,
        "value": 0
      },
      "enable": false,
      "enlighten": {
        "enable": false,
        "value": 0
      },
      "mode": "vertical",
      "speed": 25
    },
    "tilt": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "animation": {
        "enable": false,
        "speed": 0,
        "decay": 0,
        "sync": false
      },
      "direction": "clockwise",
      "enable": false
    },
    "twinkle": {
      "lines": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      },
      "particles": {
        "enable": false,
        "frequency": 0.05,
        "opacity": 1
      }
    },
    "wobble": {
      "distance": 5,
      "enable": false,
      "speed": {
        "angle": 50,
        "move": 10
      }
    },
    "orbit": {
      "animation": {
        "count": 0,
        "enable": false,
        "speed": 1,
        "decay": 0,
        "sync": false
      },
      "enable": false,
      "opacity": 1,
      "rotation": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 45
      },
      "width": 1
    },
    "links": {
      "blink": false,
      "color": {
        "value": "#000"
      },
      "consent": false,
      "distance": 150,
      "enable": false,
      "frequency": 1,
      "opacity": 0.4,
      "shadow": {
        "blur": 5,
        "color": {
          "value": "#000"
        },
        "enable": false
      },
      "triangles": {
        "enable": false,
        "frequency": 1
      },
      "width": 1,
      "warp": false
    },
    "repulse": {
      "random": {
        "enable": false,
        "minimumValue": 0
      },
      "value": 0,
      "enabled": false,
      "distance": 1,
      "duration": 1,
      "factor": 1,
      "speed": 1
    }
  }

});

