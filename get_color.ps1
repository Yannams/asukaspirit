Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("c:\Users\Admin\asukaspirit\public\images\athlete-aw1-idealFor.png")
$bmp = new-object System.Drawing.Bitmap($img)
$pixel = $bmp.GetPixel(0,0)
$hex = "#{0:X2}{1:X2}{2:X2}" -f $pixel.R, $pixel.G, $pixel.B
Write-Host "BackgroundColor: $hex"
