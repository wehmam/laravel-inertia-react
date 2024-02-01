{{-- ROOT TEMPLATE REACT --}}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet">

    {{-- HOT Reload / don't need refresh web --}}
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
    <style>
      body {
        background-color: lightgray
      }
    </style>
  </head>
  <body>

      {{-- Render all template --}}
      @inertia

  </body>
</html>
