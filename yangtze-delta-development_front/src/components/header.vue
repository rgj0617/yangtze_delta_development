<template>
  <div class="homeHeader">
    <div class="left-box">
      <div
        class="left-item"
        :class="{ active: isActive('home') }"
        @click="goTo('home')"
      >
        首页
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('chapters') }"
        @click="goTo('chapters')"
      >
        评价报告
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('rankings') }"
        @click="goTo('rankings')"
      >
        综合排序
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('interactiveMap') }"
        @click="goTo('interactiveMap')"
      >
        交互地图
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('dataScreen') }"
        @click="goTo('dataScreen')"
      >
        数据大屏
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('downloads') }"
        @click="goTo('downloads')"
      >
        资源下载
      </div>
      <div
        class="left-item"
        :class="{ active: isActive('ours') }"
        @click="goTo('ours')"
      >
        关于我们
      </div>
    </div>
    <div class="right-box">
      <!-- <div class="left-item">切换年份:</div> -->
      <div id="firstFilter" class="filter-switch">
        <input
          id="option1"
          name="options"
          type="radio"
          :checked="yearStore.year === 2023"
          @change="onYearChange(2023)"
        />
        <label class="option" for="option1">2023</label>
        <input
          id="option2"
          name="options"
          type="radio"
          :checked="yearStore.year === 2024"
          @change="onYearChange(2024)"
        />
        <label class="option" for="option2">2024</label>
        <span class="background"></span>
      </div>
      <img src="/OGMSlogo.png" class="logoImage" />
      <img src="/dataCenterLogo.png" class="logoImage" />
      <!-- <div class="left-item" @click="yearStore.changeYear">
        切换年份 : {{ yearStore.year }}
      </div> -->
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { useRouter } from "vue-router";
// @ts-ignore
import { useYearStore } from "@/store/year.js";
const yearStore = useYearStore();
const router = useRouter();

const onYearChange = (newYear: number) => {
  if (yearStore.year !== newYear) {
    yearStore.changeYear();
  }
};

const isActive = (page: string) => {
  return router.currentRoute.value.matched[0].name === page;
};

const goTo = (page: string) => {
  let route = "/" + page;
  router.push(route);
  1;
};
</script>
  
<style lang="scss" scoped>
.filter-switch {
  border: 2px solid #fff;
  border-radius: 20px;
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 1vh;
  margin-right: 5vh;
  height: 3.5vh;
  aspect-ratio: 5 / 1;
  overflow: hidden;
}
.filter-switch input {
  display: none;
}
.filter-switch label {
  flex: 1;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  z-index: 1;
  transition: all 1s;
  font-weight: 600;
  font-size: 18px;
}
.filter-switch .background {
  position: absolute;
  width: 49%;
  height: 40px;
  background-color: #94cfdf;
  // top: 0px;
  left: 0px;
  border-radius: 30px;
  transition: left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
#option2:checked ~ .background {
  left: 50%;
}
#option1:checked + label[for="option1"] {
  color: #2c4b7f;
  font-weight: 600;
}
#option2:checked + label[for="option2"] {
  color: #2c4b7f;
  font-weight: 600;
}
#option1:not(:checked) + label[for="option1"],
#option2:not(:checked) + label[for="option2"] {
  color: #ffffff;
}

.homeHeader {
  z-index: 99;
  position: fixed;
  top: 0;
  width: 100%;
  height: 5.5vh;
  background: rgba(67, 120, 180, 1);
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  color: white;

  .left-box {
    height: 100%;
    display: flex;
    box-sizing: border-box;
  }

  .right-box {
    display: flex;
    height: 100%;
    margin-right: 1vw;
    .left-item {
      width: 8vw;
    }
    .logoImage {
      height: 5.5vh;
      width: auto;
      margin-right: 1vw;
    }
  }
}

.left-item {
  height: 100%;
  width: 7vw;
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
@media (max-width: 1000px) {
  .filter-switch {
    border: 2px solid #fff;
    border-radius: 20px;
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 0.5vh;
    height: 2vh;
    aspect-ratio: 5 / 1;
    overflow: hidden;
  }
  .filter-switch input {
    display: none;
  }
  .filter-switch label {
    flex: 1;
    text-align: center;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: all 1s;
    font-weight: 600;
    font-size: 18px;
  }
  .filter-switch .background {
    position: absolute;
    width: 49%;
    height: 40px;
    background-color: #94cfdf;
    // top: 0px;
    left: 0px;
    border-radius: 30px;
    transition: left 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  #option2:checked ~ .background {
    left: 50%;
  }
  #option1:checked + label[for="option1"] {
    color: #2c4b7f;
    font-weight: 600;
  }
  #option2:checked + label[for="option2"] {
    color: #2c4b7f;
    font-weight: 600;
  }
  #option1:not(:checked) + label[for="option1"],
  #option2:not(:checked) + label[for="option2"] {
    color: #ffffff;
  }
  .homeHeader {
    position: fixed;
    top: 0;
    width: 100%;
    height: 3vh;
    background: rgba(67, 120, 180, 1);
    z-index: 99;
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
  