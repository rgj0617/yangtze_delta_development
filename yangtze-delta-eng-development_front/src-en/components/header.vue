<template>
  <div class="homeHeader">
    <div class="left-box">
      <div
        class="left-item"
        :class="{ active: isActive('home') }"
        @click="goTo('home')"
      >
        Home
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('chapters') }"
        @click="goTo('chapters')"
      >
        Report
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('rankings') }"
        @click="goTo('rankings')"
      >
        Rankings
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('interactiveMap') }"
        @click="goTo('interactiveMap')"
      >
        InteractiveMap
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('dataScreen') }"
        @click="goTo('dataScreen')"
      >
        DataScreen
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('downloads') }"
        @click="goTo('downloads')"
      >
        Download
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('ours') }"
        @click="goTo('ours')"
      >
        About us
      </div>
    </div>
    <div class="right-box">
      <img src="/OGMSlogo.png" class="logoImage" />
      <img src="/dataCenterLogo.png" class="logoImage" />
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const isActive = (page: string) => {
  return router.currentRoute.value.matched[0].name === page;
};

const goTo = (page: string) => {
  let route = "/" + page;
  router.push(route);
};
</script>
  
  <style lang="scss" scoped>
.homeHeader {
  position: fixed;
  top: 0;
  width: 100%;
  height: 5.5vh;
  background: rgba(67, 120, 180, 1);
  z-index: 2;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  color: white;

  .left-box {
    height: 100%;
    display: flex;
    box-sizing: border-box;

    .left-item {
      height: 100%;
      width: 7.8vw;
      line-height: 5vh;
      font-size: 1vw;
      font-weight: bold;
      text-align: center;
      cursor: pointer;

      &.active {
        color: #2c4b7f;

        &:hover {
          color: rgb(0, 182, 194);
        }
      }

      &:hover {
        transition: 0.5s;

        color: #2c4b7f;
      }
    }
  }

  .right-box {
    display: flex;

    .logoImage {
      height: 5.5vh;
      width: auto;
      margin-right: 3vw;
    }
    height: 100%;
  }
}
@media (max-width: 1000px) {
  .homeHeader {
    position: fixed;
    top: 0;
    width: 100%;
    height: 3vh;
    background: rgba(67, 120, 180, 1);
    z-index: 2;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    color: white;

    .left-box {
      height: 100%;
      display: flex;
      box-sizing: border-box;

      .left-item {
        height: 100%;
        width: 7vw;
        line-height: 3vh;
        font-size: 1vw;
        font-weight: bold;
        text-align: center;
        cursor: pointer;

        &.active {
          color: #2c4b7f;

          &:hover {
            color: rgb(0, 182, 194);
          }
        }

        &:hover {
          transition: 0.5s;

          color: #2c4b7f;
        }
      }
    }

    .right-box {
      display: flex;
      align-content: center;
      .logoImage {
        height: 2vh;
        width: auto;
        margin-top: 0.5vh;
        margin-right: 3vw;
      }
      height: 100%;
    }
  }
}
</style>
  