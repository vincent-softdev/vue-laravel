<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />

        <!-- Styles / Scripts -->
        @if (file_exists(public_path('build/manifest.json')) || file_exists(public_path('hot')))
            @vite(['resources/css/app.css', 'resources/js/app.js'])
        @endif
    </head>
    <body class="text-[#ff4668] flex p-6 lg:p-8 items-center lg:justify-center min-h-screen flex-col">
        <nav>
            <x-nav-link :href="route('home')" :active="request()->routeIs('home')">Home</x-nav-link>
            <x-nav-link :href="route('about')" :active="request()->routeIs('about')">About</x-nav-link>
            <x-nav-link :href="route('contact')" :active="request()->routeIs('contact')">Contact</x-nav-link>
        </nav>
    

      {{ $heading ?? ''}}
      
      <h1>Hello World!</h1>
      
      {{ $slot }}
    </body>
</html>
