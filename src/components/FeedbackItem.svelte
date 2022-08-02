<script>
  import { FeedbackStore } from '../stores/FeedbackStore'
  import Card from './ui/Card.svelte'
  export let item
  //let likes = 1

  const handleDelete = itemId => {
    // Code to delete from Store (no backend)
    // FeedbackStore.update(currentFeedback => {
    //   return currentFeedback.filter(item => item.id != itemId)
    // })

    // now let FeedbackStore delete from backend
    FeedbackStore.delReview(itemId)
  }

  const handleLike = itemId => {
    FeedbackStore.likeReview(itemId)
  }
</script>

<Card>
  <div class="num-display">
    {item.rating}
  </div>
  <button class="close" on:click={() => handleDelete(item.id)}>X</button>
  <p class="text-display">{item.text}</p>
  <button class="like" on:click={() => handleLike(item.id)}>Likes {item.likes}</button>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px #eee solid;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }
  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
  .like {
    position: absolute;
    bottom: 10px;
    left: 50px;
    cursor: 20px;
    cursor: pointer;
    /* background: #ff6a95; */
    color: #ff6a95;
    background: none;
    border: none;
  }
</style>
