module.exports = {
    pluginOptions: {
        electronBuilder: {
            builderoptions: {
                "build": {
                    "win": {
                      "target": [
                        {
                          "target": "nsis",
                          "arch": [
                            "x64",
                            "ia32"
                          ]
                        }
                      ]
                    }
                  }
            }
        }
    }
}