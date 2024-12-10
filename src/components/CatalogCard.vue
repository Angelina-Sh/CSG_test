<template>
  <div class="card">
    <div class="card_image">
      <img src="png/catalogCard.png" alt="Catalog image" />
    </div>
    <div class="description">
      <h3>Колье</h3>
      <p>10 000 ₽</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 405px;
  height: 450px;
  margin: 20px 10px;

  .card_image {
    width: 100%;
    height: 95%;
    margin-bottom: 10px;
    overflow: hidden;

    img {
      width: 100%;
    }
  }

  .description {
    width: 100%;
    display: flex;
    justify-content: space-between;

    h3,
    p {
      font-size: 18px;
      font-weight: 400;
      text-transform: capitalize;
    }
    p {
      opacity: 0.5;
    }
  }
}
</style>
