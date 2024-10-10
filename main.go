package main

import (
	"embed"
	"net/http"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

// Embed the frontend build directory
//go:embed all:frontend/dist
var assets embed.FS

func main() {
    // Create an instance of the app structure
    app := NewApp()

    // Create application with options
    err := wails.Run(&options.App{
        Title:  "mvp",
        Width:  1024,
        Height: 768,
        AssetServer: &assetserver.Options{
            Assets: assets,
            Handler: http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
                if r.URL.Path == "/assets/images/MaiDataLogoFinal.png" {
                    http.ServeFile(w, r, "./frontend/src/assets/images/MaiDataLogoFinal.png")
                    return
                }
                http.FileServer(http.Dir("./frontend/src/assets")).ServeHTTP(w, r)
            }),
        },
        BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
        OnStartup:        app.startup,
        Bind: []interface{}{
            app,
        },
    })

    if err != nil {
        println("Error:", err.Error())
    }
}
