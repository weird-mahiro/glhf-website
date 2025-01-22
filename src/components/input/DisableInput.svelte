<script lang="ts">
  let { ca }: { ca: string } = $props();
</script>

<input
  class="w-full rounded-lg border-2 bg-white px-4 py-4 text-black hover:shadow-none focus:shadow-none"
  disabled={true}
  value={ca}
/>
