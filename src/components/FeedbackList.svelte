<script>
  import { onMount, onDestroy } from 'svelte'
  import { FeedbackStore } from '../stores/FeedbackStore'
  import { fade, scale } from 'svelte/transition'
  import FeedbackItem from './FeedbackItem.svelte'

  let loading = true

  onMount(async () => {
    await FeedbackStore.loadReviews()
    loading = false
  })
</script>

// in case of delays loading (eg getting data on slow internet connection)
{#if loading}
  <div>Loading ...</div>
{:else}
  {#each $FeedbackStore as fb (fb.id)}
    <div in:scale out:fade={{ duration: 500 }}>
      <FeedbackItem item={fb} />
    </div>
  {/each}
{/if}
