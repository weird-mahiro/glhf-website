<script lang="ts">
  let { url, children }: { url: string; children: any } = $props();
</script>

<a
  href={url}
  target="_blank"
  class="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-black bg-white px-4 py-4 text-black"
>
  {@render children()}
</a>
