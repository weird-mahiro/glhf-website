<script lang="ts">
  import { Copy } from "lucide-svelte";
  import { toast } from "svelte-sonner";
  let { info }: { info: string } = $props();
</script>

<button
  onclick={() => {
    toast.success("Copied");
    navigator.clipboard.writeText(info);
  }}
  class="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-black bg-white px-4 py-4 text-black transition duration-200 ease-out hover:bg-black hover:text-white"
>
  <Copy />
</button>
