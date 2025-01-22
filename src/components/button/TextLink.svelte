<script lang="ts">
  let { url, children }: { url: string; children: any } = $props();
</script>

<a
  href={url}
  target="_blank"
  class="rounded-lg border-2 border-black bg-white px-12 py-4 text-xl text-black transition duration-200 ease-out hover:bg-black hover:text-white"
>
  {@render children()}
</a>
