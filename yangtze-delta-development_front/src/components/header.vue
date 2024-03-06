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
        Chapters
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
        Interactive Map
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('dataScreen') }"
        @click="goTo('dataScreen')"
      >
        Data Screen
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('downloads') }"
        @click="goTo('downloads')"
      >
        Downloads&Materials
      </div>
    </div>
    <div class="right-box">
      <div class="yes-login">
        <!-- 添加右侧内容 -->
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const isActive = (page: string) => {
  return router.currentRoute.value.name === page;
};

const goTo = (page: string) => {
  let route = "/" + page;
  router.push(route);
};
</script>
  
  <style lang="scss" scoped>
.homeHeader {
  position: absolute;
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
      width: 7vw;
      line-height: 5vh;
      font-size: 1.6vh;
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
    height: 100%;

    .yes-login {
      margin-top: 1.5vh;
      display: flex;

      .button-item:first-child {
        height: 4vh;
        width: 5vw;
        background-color: rgb(0, 182, 194);
        border-radius: 5px;
        line-height: 4vh;
        font-size: 1.6vh;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
        margin-right: 0.5vw;

        &:hover {
          background-color: rgb(28, 160, 168);
          transition: 0.5s;
        }
      }

      .button-item:last-child {
        height: 4vh;
        width: 5vw;
        background-color: rgb(72, 73, 82);
        border-radius: 5px;
        line-height: 4vh;
        font-size: 1.6vh;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
        margin-right: 0.5vw;

        &:hover {
          background-color: rgb(62, 62, 66);
          transition: 0.5s;
        }
      }
    }

    .no-login {
      display: flex;
      justify-content: flex-end;
      width: calc(12vw - 2vh);
      padding: 1vh;
      font-size: 2vh;
      font-weight: 600;

      .button-item {
        height: 4vh;
        width: 5vw;
        background-color: rgb(0, 182, 194);
        border-radius: 5px;
        line-height: 4vh;
        font-size: 1.6vh;
        font-weight: 500;
        text-align: center;
        cursor: pointer;
        margin-right: 1vw;

        &:hover {
          background-color: rgb(28, 160, 168);
          transition: 0.5s;
        }
      }

      .right-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1vw;

        .iconButton {
          position: absolute;
          color: white;
          font-size: 36px;
          margin-top: -25px;
          margin-left: -10px;
        }
      }
    }
  }
}
</style>
  