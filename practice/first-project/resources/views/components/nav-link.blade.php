@props(['active' => false, 'href' => '/'])

<a href="{{ $href }}" 
  class="{{ $active ? 'bg-gray-900 text-red-500 no-underline' : 'text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium' }}"
  aria-current="{{ $active ? 'page' : 'false' }}">
    {{ $slot }}
</a>
<p class="text-red-500 font-bold">Xom truyen</p>
<p class="{{ $active ? ' text-blue ' : ' text-red ' }}">Hello</p>