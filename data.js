var APP_DATA = {
  "scenes": [
    {
      "id": "0-parkiran-luar-ft",
      "name": "PARKIRAN LUAR FT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 1.1280118210675312,
        "pitch": -0.02924424039429674,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.541659034452529,
          "pitch": 0.3756038200436329,
          "rotation": 0,
          "target": "1-pintu-belakang-ft"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pintu-belakang-ft",
      "name": "PINTU BELAKANG FT",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1800,
      "initialViewParameters": {
        "yaw": 1.7253988503934057,
        "pitch": 0.030374514606531733,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.705802092514384,
          "pitch": 0.43252257624471824,
          "rotation": 0,
          "target": "0-parkiran-luar-ft"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Load Access Test",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
