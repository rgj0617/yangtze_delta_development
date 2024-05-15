<template>
  <div class="container">
    <homeHeader />

    <div class="main">
      <div class="section s1">
        <!-- <video
          src="../../assets/home/bg1.mp4"
          class="bg-video"
          autoplay
          loop
        ></video> -->
        <div class="section-content">
          <span class="title">长三角高质量发展评价报告</span>
          <span class="subtitle">
            本报告面向国家和地区对长三角的发展定位与要求，采用“自上而下”基于专家经验的政策解读法<br />
            辅以“自下而上”基于地理大模型的文本主题挖掘技术生成一套借助“众力”、<br />
            更具公信力的高质量发展评价指标体系。
          </span>
          <a class="bt1" @click="goTo('chapters')">阅读报告</a>
          <a class="bt2" @click="goTo('interactiveMap')">评价结果</a>
        </div>
        <div class="section-footer">
          <div>滑动查看更多</div>
          <br />
          <div class="line">
            <ArrowDownOutlined style="fontsize: 30px" />
          </div>
          <div class="line">
            <ArrowDownOutlined style="fontsize: 30px" />
          </div>
          <div class="line">
            <ArrowDownOutlined style="fontsize: 30px" />
          </div>
        </div>
      </div>
      <div class="section-bg">
        <div class="section s2">
          <div class="section2-left">
            <div class="section2-left-content">
              <div class="section2-left-content-title1">
                View Rankings & Scores
              </div>
              <div class="section2-left-content-title2">查看排名和得分</div>
              <div class="section2-left-content-des">
                长三角高质量发展（2023）平均得分为55.38，总体发展水平较高，呈现创新发展、协调发展、绿色发展、开放发展和共享发展多维度协同的高质量发展态势，体现了长三角城市群作为我国经济最具活力、开放程度最高、创新能力最强、吸纳外来人口最多的区域之一，在国家现代化建设大局和全方位开放格局中具有举足轻重的地位。
              </div>
              <div
                class="section2-left-content-button"
                @click="goTo('rankings')"
              >
                开始探索
                <!-- <ArrowRightOutlined style="color: black" /> -->
              </div>
            </div>
          </div>
          <div class="section2-right">
            <img src="/home/banner1.png" alt="Description of the image" />
          </div>
        </div>

        <div class="section s3">
          <div class="section3-left">
            <img src="/home/banner2.png" alt="Description of the image" />
          </div>
          <div class="section3-right">
            <div class="section3-right-content">
              <div class="section3-right-content-title1">
                Explore Interactive Maps
              </div>
              <div class="section3-right-content-title2">探索交互式地图</div>
              <div class="section3-right-content-des">
                我们的互动地图展示了长三角41个城市的高质量发展水平评价得分及维度介绍。您可以查看全面或单独的维度发展水平评估结果，交互式设计以便于您进一步了解我们的报告内容。
              </div>
              <div
                class="section3-right-content-button"
                @click="goTo('interactiveMap')"
              >
                开始探索
                <!-- <ArrowRightOutlined style="color: black" /> -->
              </div>
            </div>
          </div>
        </div>

        <div class="section s2">
          <div class="section2-left">
            <div class="section2-left-content">
              <div class="section2-left-content-title1">
                Explore data dashboard
              </div>
              <div class="section2-left-content-title2">体验数据大屏</div>
              <div class="section2-left-content-des">
                您可以在数据大屏中查看该报告的结论数据，包括总体评估得分的数据图表、数据地图、每个维度的评价情况以及组成每个维度的具体指标。
              </div>
              <div
                class="section2-left-content-button"
                @click="goTo('dataScreen')"
              >
                开始探索
                <!-- <ArrowRightOutlined style="color: black" /> -->
              </div>
            </div>
          </div>
          <div class="section2-right">
            <img src="/home/banner3.png" alt="Description of the image" />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="footer">
      <div class="copyright">版权信息</div>
    </div> -->
  </div>
  <foot />
</template>

<script setup lang="ts">
import { ArrowDownOutlined } from "@ant-design/icons-vue";
// import { ArrowDownOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";
// import { text } from "stream/consumers";
// import { usePermissionStore } from "@/stores/permissionStore";
// import router from "@/router/index.js";
// import { ref } from "vue";
// @ts-ignore
import homeHeader from "@/components/header.vue";
// @ts-ignore
import foot from "@/components/foot.vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goTo = (page: string) => {
  let route = "/" + page;
  router.push(route);
};
</script>

<style lang="scss" scoped>
body,
html {
  margin: 0;
  padding: 0;
  overflow: hidden;
  //10px=1em
  font-size: 62.5%;
}
img {
  height: 80vh;
  width: auto;
  border-radius: 20px;
  box-shadow: 4px 12px 12px rgba(0, 0, 0, 0.3);
}
@keyframes slideBackgroundColor {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
.container {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  //   background-image: linear-gradient(
  //     to bottom right,
  //     rgb(167, 180, 212),
  //     rgb(153, 200, 220),
  //     rgb(137, 198, 219)
  //   );
  background: linear-gradient(to bottom right, #4378b4, #93d0e0, #adaed2);
  background-size: 200% 200%;
  animation: slideBackgroundColor 10s ease infinite;

  &::-webkit-scrollbar {
    width: 1px;
  }

  &::-moz-scrollbar {
    width: 1px;
  }

  /* 将 overflow 移动到父容器 */
}

.header {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 5.5vh;
  background: rgba(67, 120, 180, 0.8);
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
      font-size: 2vh;
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

.main {
  //   height: 525vh;
  height: 400vh;
  overflow-x: hidden;

  .section {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;

    &-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      width: 60vw;
      height: 40vh;
      //   background: rgba(110, 64, 64, 0.5);
      z-index: 1;

      .title {
        text-align: center;
        padding-top: 2vh;
        height: 13vh;
        width: 100%;
        font-size: 6vh;
        font-weight: 800;
        color: white;
      }

      .subtitle {
        height: 6vh;
        width: 100%;
        text-align: center;
        font-size: 1.3vw;
        font-weight: 500;
        color: white;
      }

      a {
        position: relative;
        text-decoration: none;
        font-size: 3em;

        font-weight: 700;

        transition: 0.5s;
        padding: 10px 30px;
        color: white;
        overflow: hidden;
        -webkit-box-reflect: below 1px linear-gradient(transparent, #0003);

        &:hover {
          border-radius: 10px;
          cursor: pointer;
          background: #21ebff;
          color: #111;
          box-shadow: 0 0 50px #21ebff;
          transition-delay: 0.5s;
        }

        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;

          border-top: 2px solid #21ebff;
          border-left: 2px solid #21ebff;
          transition: 0.5s;
          transition-delay: 0.5s;
        }

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 10px;
          height: 10px;
          border-bottom: 2px solid #21ebff;
          border-right: 2px solid #21ebff;
          transition: 0.5s;
          transition-delay: 0.5s;
        }

        &:hover::before {
          border-radius: 10px;
          width: 100%;
          height: 100%;
          transition-delay: 0s;
        }

        &:hover::after {
          border-radius: 10px;
          width: 100%;
          height: 100%;
          transition-delay: 0s;
        }
      }
    }

    &-footer {
      position: absolute;
      bottom: 10vh;
      width: 100vw;
      height: 8vh;
      text-align: center;
      font-size: 2vh;
      //   background: white;
      // z-index: 1000;
      color: white;
    }

    // background-attachment: fixed;
  }

  .s1 {
    height: 100vh;
    // background-image: url("../../assets/home/bg1.mp4");
  }

  .section-bg {
    position: relative;
    height: 200vh;
    // background-image: url("../../assets/home/bgz1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
    background-position-y: 4vh;
  }

  .s2 {
    height: 100vh;
    display: flex;

    .section2-left {
      position: relative;
      width: 50%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      &-content {
        position: relative;
        // background: white;
        left: 5vw;
        padding: 1vh 0vw 1vh 5vw;
        width: 30vw;
        height: 50vh;
        // border-radius: 3vh;

        // box-shadow: 0 0 10px #fff;
        // -webkit-box-reflect: below 5px linear-gradient(transparent, #0003);
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        color: white;

        &-title1 {
          width: 100%;
          height: 10vh;
          font-size: 2.4vw;
          font-weight: 800;
        }

        &-title2 {
          width: 100%;
          height: 10vh;
          font-size: 3vw;
          font-weight: 800;
          background: linear-gradient(
            to right,
            rgb(79, 162, 236),
            rgb(111, 249, 239)
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &-des {
          display: flex;
          margin-top: 1vh;
          margin-bottom: 1vh;
          width: 80%;
          height: 10vh;
          font-size: 1.8vh;
          font-weight: 500;
          color: white;
        }

        &-button {
          text-align: center;
          line-height: 6vh;
          margin-top: 3vh;
          width: 8vw;
          height: 6vh;
          border-radius: 10px;
          font-size: 2.4vh;
          font-weight: 800;
          text-align: center;
          color: white;
          // color: rgb(90, 90, 90, 0.9);
          cursor: pointer;
          background: linear-gradient(
            to right,
            rgb(79, 162, 236, 0.9),
            rgb(111, 249, 239, 0.9)
          );

          &:hover {
            transition: 0.5s;
            background: linear-gradient(
              to right,
              rgb(79, 162, 236),
              rgb(111, 249, 239)
            );
          }
        }

        :deep(.anticon svg) {
          color: #000;
        }
      }
    }

    .section2-right {
      width: 50%;
      height: 85%;
      border-radius: 2vh;
      background-image: url("../../assets/home/bg2.png");
    }
  }

  .s3 {
    height: 100vh;
    display: flex;

    .section3-left {
      width: 50%;
      height: 85%;
      border-radius: 2vh;
      background-image: url("../../assets/home/bg3.png");
      display: flex; /* 将 .section3-left 设置为 Flex 容器 */
      justify-content: flex-end; /* 子元素居右对齐 */
    }

    .section3-right {
      position: relative;
      width: 50%;
      height: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      &-content {
        position: relative;
        // background: white;
        left: -5vw;
        padding: 1vh 0vw 1vh 5vw;
        width: 30vw;
        height: 50vh;
        // border-radius: 3vh;

        // box-shadow: 0 0 10px #fff;
        // -webkit-box-reflect: below 5px linear-gradient(transparent, #0003);
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        color: white;

        &-title1 {
          width: 100%;
          height: 10vh;
          font-size: 2.4vw;
          font-weight: 800;
        }

        &-title2 {
          width: 100%;
          height: 10vh;
          font-size: 3vw;
          font-weight: 800;
          background: linear-gradient(
            to right,
            rgb(79, 162, 236),
            rgb(111, 249, 239)
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &-des {
          display: flex;
          margin-top: 1vh;
          margin-bottom: 1vh;
          width: 80%;
          height: 10vh;
          font-size: 1.8vh;
          font-weight: 500;
          color: white;
        }

        &-button {
          // display: flex;
          // align-items: center;
          text-align: center;
          line-height: 6vh;
          margin-top: 3vh;
          width: 8vw;
          height: 6vh;
          border-radius: 10px;
          font-size: 2.4vh;
          font-weight: 800;
          text-align: center;
          // color: rgb(90, 90, 90, 0.9);
          color: white;
          cursor: pointer;
          background: linear-gradient(
            to right,
            rgb(79, 162, 236),
            rgb(111, 249, 239)
          );

          &:hover {
            transition: background 1s;
            background: linear-gradient(
              to right,
              rgb(79, 162, 236),
              rgb(111, 249, 239)
            );
          }
        }

        :deep(.anticon svg) {
          color: #000;
        }
      }
    }
  }

  .bt1 {
    margin-top: 13vh;
    margin-right: 1vw;
  }

  .bt2 {
    margin-top: 13vh;
    margin-left: 1vw;
    filter: hue-rotate(275deg);
  }

  .slide-show {
    position: relative;
    box-sizing: border-box;
    height: 70vh;

    .title {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 12%;
      left: 50%;
      font-size: 5.2vh;
      font-weight: 600;
      width: fit-content;
      color: white;

      span {
        background: linear-gradient(
          to right,
          rgb(79, 162, 236),
          rgb(111, 249, 239)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .scroll {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 60%;
      left: 50%;
      display: flex;
      width: 80vw;
      height: 50vh;
      overflow: hidden;
      // mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
      // -webkit-mask-image: linear-gradient(90deg, transparent, #fff 20%, #fff 80%, transparent);
    }

    .img-box {
      display: flex;
      column-gap: 10px;
    }

    .img-box > div,
    .img-box > div .bg {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5vw;
    }

    .img-box .bg {
      width: 20vw;
      height: 100%;
      filter: hue-rotate(1deg);
      cursor: pointer;
      transition: filter 0.5s;

      img {
        position: absolute;
        border-radius: 10px 10px 0 0;
        width: 100%;
        top: 0%;
        height: 60%;
        object-fit: cover;
        z-index: 1;
      }

      .description {
        position: absolute;
        background: linear-gradient(
          to right,
          rgb(79, 162, 236),
          rgb(111, 249, 239)
        );
        border-radius: 10px;
        width: 20vw;
        height: 100%;

        .small-title {
          position: absolute;
          top: 70%;
          left: 10%;
          font-size: 2vh;
          font-weight: 600;
        }

        .small-tip {
          position: absolute;
          top: 78%;
          left: 10%;
          font-size: 1.4vh;
          color: hsla(0, 0%, 100%, 0.8);
          /* 使用line-height来垂直居中文字 */
        }
      }
    }

    .scroll > div {
      white-space: nowrap;
      animation: animate var(--t) linear infinite;
      animation-delay: calc(var(--t) * -1);
    }

    @keyframes animate {
      0% {
        transform: translateX(100%);
      }

      100% {
        transform: translateX(-100%);
      }
    }

    .scroll > div:nth-child(2) {
      animation: animate2 var(--t) linear infinite;
      animation-delay: calc(var(--t) / -2);
    }

    @keyframes animate2 {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(-200%);
      }
    }

    .scroll:hover > div {
      animation-play-state: paused;
    }
  }

  .more-func {
    position: relative;
    box-sizing: border-box;
    height: 115vh;

    .title {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 5%;
      left: 50%;
      font-size: 5.2vh;
      font-weight: 600;
      width: fit-content;
      color: white;

      :last-child {
        padding-left: 1vw;
        background: linear-gradient(
          to right,
          rgb(79, 162, 236),
          rgb(111, 249, 239)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .big-container {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 32%;
      left: 50%;
      width: 50vw;
      height: 45vh;
      border-radius: 20px;
      background-color: rgb(23, 26, 29);

      img {
        position: absolute;
        height: 80%;
        width: 50%;
        right: 5%;
        top: 10%;
      }

      .text {
        .title {
          position: absolute;
          font-size: 2.4vh;
          top: 25%;
          left: 8%;
          background: linear-gradient(
            to right,
            rgb(79, 162, 236),
            rgb(111, 249, 239)
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tip {
          color: white;
          position: absolute;
          font-size: 1.6vh;
          top: 32%;
          left: 3.5%;
          width: 20vw;

          span {
            display: block;
          }
        }
      }
    }

    .small-container {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 78%;
      left: 50%;
      width: 50vw;
      height: 50vh;
      color: white;
      display: flex;

      .small-box {
        position: relative;
        height: 100%;
        width: 24vw;
        border-radius: 20px;
        background-color: rgb(23, 26, 29);

        img {
          width: 100%;
          border-radius: 20px 20px 0 0;
        }

        .title {
          position: absolute;
          font-size: 2.4vh;
          top: 65%;
          left: 20%;
          background: linear-gradient(
            to right,
            rgb(79, 162, 236),
            rgb(111, 249, 239)
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .tip {
          position: absolute;
          font-size: 1.6vh;
          top: 70%;
          left: 8%;
          width: 20vw;
        }
      }

      .small-box:last-child {
        margin-left: 2vw;
      }
    }
  }

  .end-enter {
    position: relative;
    color: white;
    box-sizing: border-box;
    width: 100vw;
    height: 40vh;

    .into-title {
      position: absolute;
      transform: translate(-50%, -50%);
      top: 25%;
      left: 50%;
      font-size: 5.2vh;
      font-weight: 600;
      width: fit-content;
      background: linear-gradient(
        90deg,
        white 0,
        white 40%,
        rgb(111, 249, 239, 0.7) 45%,
        rgb(111, 249, 239, 0.9) 50%,
        rgb(111, 249, 239, 0.7) 55%,
        white 60%,
        white 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .enter-button {
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      line-height: 5vh;
      margin-top: 2vh;
      width: 8vw;
      height: 5vh;
      border-radius: 10px;
      font-size: 2vh;
      font-weight: 800;
      text-align: center;
      color: #000;
      cursor: pointer;
      background: linear-gradient(
        to right,
        rgb(79, 162, 236, 0.9),
        rgb(111, 249, 239, 0.9)
      );

      &:hover {
        transition: 0.5s;
        background: linear-gradient(
          to right,
          rgb(79, 162, 236),
          rgb(111, 249, 239)
        );
      }
    }
  }
}

.footer {
  height: 13vh;
  width: 100%;
  position: relative;

  .copyright {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 60vw;
    color: white;
  }
}

@media (max-width: 1000px) {
  img {
    width: 48vw;
    height: auto;
    box-shadow: 8px 12px 12px rgba(0, 0, 0, 0.3);
  }
  .main {
    height: 255vh;
    overflow: hidden;
    .section {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100vw;
      height: 100vh;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: top center;
      .section-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        width: 95vw;
        height: 60vh;
        //   background: rgba(110, 64, 64, 0.5);
        z-index: 1;
        .title {
          height: 10vh;
          width: 100%;
          font-size: 11vw;
          font-weight: 800;
          color: white;
        }

        .subtitle {
          height: 6vh;
          width: 100%;
          text-align: center;
          font-size: 4vw;
          font-weight: 500;
          color: white;
        }
      }
    }
    .section-bg {
      .s2 {
        height: 50vh;
        display: flex;
        .section2-right {
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          width: 50%;
          border-radius: 2vh;
        }
        .section2-left {
          position: relative;
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          &-content {
            position: relative;
            left: 0vw;
            width: 50vw;
            height: 70vh;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            color: white;
            &-title1 {
              width: 100%;
              font-size: 4.5vw;
              height: 12vw;
              font-weight: 800;
            }
            &-title2 {
              width: 100%;
              height: 7vw;
              font-size: 5vw;
              font-weight: 800;
              background: linear-gradient(
                to right,
                rgb(79, 162, 236),
                rgb(111, 249, 239)
              );
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            &-des {
              display: flex;
              margin-top: 1vh;
              margin-bottom: 1vh;
              width: 80%;
              height: 10vh;
              font-size: 2vw;
              font-weight: 500;
              color: white;
            }
            &-button {
              line-height: 6vw;
              width: 18vw;
              height: 6vw;
              border-radius: 10px;
              font-size: 2.4vw;
              font-weight: 800;
              color: white;
              cursor: pointer;
              background: linear-gradient(
                to right,
                rgba(79, 162, 236, 0.9),
                rgba(111, 249, 239, 0.9)
              );
            }
          }
        }
      }
      .s3 {
        height: 50vh;
        display: flex;
        .section3-left {
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          width: 50%;
          border-radius: 2vh;
        }
        .section3-right {
          position: relative;
          width: 50%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          &-content {
            position: relative;
            left: 0vw;
            width: 50vw;
            height: 70vh;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            justify-content: center;
            color: white;
            &-title1 {
              width: 100%;
              font-size: 4.5vw;
              height: 12vw;
              font-weight: 800;
            }
            &-title2 {
              width: 100%;
              height: 7vw;
              font-size: 5vw;
              font-weight: 800;
              background: linear-gradient(
                to right,
                rgb(79, 162, 236),
                rgb(111, 249, 239)
              );
              background-clip: text;
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            &-des {
              display: flex;
              margin-top: 1vh;
              margin-bottom: 1vh;
              width: 80%;
              height: 10vh;
              font-size: 2vw;
              font-weight: 500;
              color: white;
            }
            &-button {
              line-height: 6vw;
              width: 18vw;
              height: 6vw;
              border-radius: 10px;
              font-size: 2.4vw;
              font-weight: 800;
              color: white;
              cursor: pointer;
              background: linear-gradient(
                to right,
                rgba(79, 162, 236, 0.9),
                rgba(111, 249, 239, 0.9)
              );
            }
          }
        }
      }
    }
  }
}
</style>