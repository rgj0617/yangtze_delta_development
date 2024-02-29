<style lang="scss" scoped>
body,
html {
  margin: 0;
  padding: 0;
  overflow: hidden;
  //10px=1em
  font-size: 62.5%;
}

.container {
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  background: #000;

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
  height: 7vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1;
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
      width: 6vw;
      line-height: 7vh;
      font-size: 2vh;
      text-align: center;
      cursor: pointer;

      &.active {
        color: rgb(0, 182, 194);

        &:hover {
          color: rgb(0, 182, 194);
        }
      }

      &:hover {
        transition: 0.5s;
        color: gray;
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
  height: 525vh;
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

    .bg-video {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 0;
    }

    &-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: flex-start;
      width: 45vw;
      height: 40vh;
      //   background: rgba(110, 64, 64, 0.5);
      z-index: 1;

      .title {
        text-align: center;
        padding-top: 2vh;
        height: 13vh;
        width: 100%;
        font-size: 9vh;
        font-weight: 800;
        color: white;
      }

      .subtitle {
        height: 6vh;
        width: 100%;
        text-align: center;

        font-size: 2rem;
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
    background-image: url("../../assets/home/bgz1.png");
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
          font-size: 6.5vh;
          font-weight: 800;
        }

        &-title2 {
          width: 100%;
          height: 10vh;
          font-size: 6.5vh;
          font-weight: 800;
          background: linear-gradient(to right,
              rgb(79, 162, 236),
              rgb(111, 249, 239));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &-des {
          display: flex;
          margin-top: 1vh;

          width: 80%;
          height: 10vh;
          font-size: 2.5vh;
          font-weight: 500;
          color: gray;
        }

        &-button {
          text-align: center;
          line-height: 6vh;
          margin-top: 2vh;
          width: 8vw;
          height: 6vh;
          border-radius: 10px;
          font-size: 2vh;
          font-weight: 800;
          text-align: center;
          color: #000;
          cursor: pointer;
          background: linear-gradient(to right,
              rgb(79, 162, 236, 0.9),
              rgb(111, 249, 239, 0.9));

          &:hover {
            transition: 0.5s;
            background: linear-gradient(to right,
                rgb(79, 162, 236),
                rgb(111, 249, 239));
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
          font-size: 6.5vh;
          font-weight: 800;
        }

        &-title2 {
          width: 100%;
          height: 10vh;
          font-size: 6.5vh;
          font-weight: 800;
          background: linear-gradient(to right,
              rgb(79, 162, 236),
              rgb(111, 249, 239));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        &-des {
          display: flex;
          margin-top: 1vh;

          width: 80%;
          height: 10vh;
          font-size: 2.5vh;
          font-weight: 500;
          color: gray;
        }

        &-button {
          // display: flex;
          // align-items: center;
          text-align: center;
          line-height: 6vh;
          margin-top: 2vh;
          width: 8vw;
          height: 6vh;
          border-radius: 10px;
          font-size: 2vh;
          font-weight: 800;
          text-align: center;
          color: #000;
          cursor: pointer;
          background: linear-gradient(to right,
              rgb(79, 162, 236, 0.9),
              rgb(111, 249, 239, 0.9));

          &:hover {
            transition: 0.5s;
            background: linear-gradient(to right,
                rgb(79, 162, 236),
                rgb(111, 249, 239));
          }
        }

        :deep(.anticon svg) {
          color: #000;
        }
      }
    }
  }

  .bt1 {
    margin-right: 1vw;
  }

  .bt2 {
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
        background: linear-gradient(to right,
            rgb(79, 162, 236),
            rgb(111, 249, 239));
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

    .img-box>div,
    .img-box>div .bg {
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
        background: linear-gradient(to right,
            rgb(79, 162, 236),
            rgb(111, 249, 239));
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

    .scroll>div {
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

    .scroll>div:nth-child(2) {
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

    .scroll:hover>div {
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
        background: linear-gradient(to right,
            rgb(79, 162, 236),
            rgb(111, 249, 239));
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
          background: linear-gradient(to right,
              rgb(79, 162, 236),
              rgb(111, 249, 239));
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
          background: linear-gradient(to right,
              rgb(79, 162, 236),
              rgb(111, 249, 239));
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
      background: linear-gradient(90deg,
          white 0,
          white 40%,
          rgb(111, 249, 239, 0.7) 45%,
          rgb(111, 249, 239, 0.9) 50%,
          rgb(111, 249, 239, 0.7) 55%,
          white 60%,
          white 100%);
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
      background: linear-gradient(to right,
          rgb(79, 162, 236, 0.9),
          rgb(111, 249, 239, 0.9));

      &:hover {
        transition: 0.5s;
        background: linear-gradient(to right,
            rgb(79, 162, 236),
            rgb(111, 249, 239));
      }
    }
  }
}

.footer {
  height: 13vh;
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
</style>
<!-- 
<template>
  <div class="container">
    <div class="header">
      <div class="left-box">
        <div class="left-item">logo</div>
        <div class="left-item">桌面版</div>
        <div class="left-item active">网页版</div>
        <div class="left-item">创作课堂</div>
      </div>
      <div class="right-box">
        <div class="yes-login">
          <div class="button-item" @click="goScence()">立即创作</div>
          <div class="button-item" @click="enterLogin()">登录/注册</div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="section s1">
        <video src="../../assets/home/bg1.mp4" class="bg-video" autoplay loop></video>
        <div class="section-content">
          <span class="title">轻而易剪，上演大幕</span>
          <span class="subtitle">
            在线剪辑更流畅·素材共享，团队创作更轻松·支持多设备查看
          </span>

          <a class="bt1" @click="goScence()">体验场景创作</a>
          <a class="bt2" @click="goWorkingSpace()">进入个人空间</a>
        </div>
        <div class="section-footer">
          <div>滑动浏览更多</div>
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
              <div class="section2-left-content-title1">无需专业基础</div>
              <div class="section2-left-content-title2">轻松编辑场景</div>
              <div class="section2-left-content-des">
                免费在线场景编辑器，功能全面、操作简单，无需任何经验即可快速上手。海量优质版权素材，商用无忧，无惧侵权。
              </div>
              <div class="section2-left-content-button" @click="goScence()">
                立即免费使用
                <ArrowRightOutlined style="color: black" />
              </div>
            </div>
          </div>
          <div class="section2-right"></div>
        </div>
        <div class="section s3">
          <div class="section3-left"></div>
          <div class="section3-right">
            <div class="section3-right-content">
              <div class="section3-right-content-title1">专业的审片工具</div>
              <div class="section3-right-content-title2">提升视频协作效率</div>
              <div class="section3-right-content-des">
                逐帧审阅视频，通过圈点、箭头批注，精确传达修改意见。通过剪映专业版剪辑的视频，也可以自由分享，在网页上审阅。
              </div>
              <div class="section3-right-content-button">
                立即上传作品
                <ArrowRightOutlined style="color: black" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 内容 -->
      <div class="slide-show">
        <div class="title">满足<span>多种创作场景</span>的需求</div>
        <div class="scroll img-box" style="--t: 50s">
          <div>
            <div class="bg" style="--r: 0">
              <img src="../../assets/home/slide/1_1.png" />
              <div class="description">
                <div class="small-title">社交媒体</div>
                <div class="small-tip">
                  <p>创意花字、文本朗读、酷炫特效，</p>
                  <p>帮你充分发挥创意，玩转视频</p>
                </div>
              </div>
            </div>
            <div class="bg" style="--r: 40">
              <img src="../../assets/home/slide/2_1.png" />
              <div class="description">
                <div class="small-title">广告大片</div>
                <div class="small-tip">
                  <p>海量可商用的音乐、电影级滤镜转场效果，</p>
                  <p>广告大片轻松制作</p>
                </div>
              </div>
            </div>
            <div class="bg" style="--r: 80">
              <img src="../../assets/home/slide/3_1.png" />
              <div class="description">
                <div class="small-title">知识分享</div>
                <div class="small-tip">
                  <p>随时随地将手机中的素材同步云端，</p>
                  <p>在web端完成剪辑，中长视频轻松做</p>
                </div>
              </div>
            </div>
            <div class="bg" style="--r: 120">
              <img src="../../assets/home/slide/4_1.png" />
              <div class="description">
                <div class="small-title">电商种草</div>
                <div class="small-tip">
                  <p>可商用的电商风格素材、视频空境，</p>
                  <p>助力你的产品宣传和市场营销</p>
                </div>
              </div>
            </div>
            <div class="bg" style="--r: 160">
              <img src="../../assets/home/slide/5_1.png" />
              <div class="description">
                <div class="small-title">直播引流</div>
                <div class="small-tip">
                  <p>直播间高光片段轻松剪辑，配合动效贴纸，</p>
                  <p>快速制作引流视频</p>
                </div>
              </div>
            </div>
            <div class="bg" style="--r: 200">
              <img src="../../assets/home/slide/6_1.png" />
              <div class="description">
                <div class="small-title">横竖转换</div>
                <div class="small-tip">
                  <p>横版视频转竖版，一套素材，</p>
                  <p>轻松完成多平台尺寸适配</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="bg" style="--r: 0; margin-left: 7vw">
              <img src="../../assets/home/slide/1_1.png" />
              <div class="description">
                <div class="small-title">社交媒体</div>
                <div class="small-tip">
                  <p>创意花字、文本朗读、酷炫特效，</p>
                  <p>帮你充分发挥创意，玩转视频</p>
                </div>
              </div>
            </div>
            <div class="bg" style="--r: 40">
              <img src="../../assets/home/slide/2_1.png" />
              <div class="description">
                <div class="small-title">广告大片</div>
                <div class="small-tip">
                  <p>海量可商用的音乐、电影级滤镜转场效果，</p>
                  <p>广告大片轻松制作</p>
                </div>
              </div>
            </div>
            <div class="bg" style="--r: 80">
              <img src="../../assets/home/slide/3_1.png" />
              <div class="description">
                <div class="small-title">知识分享</div>
                <div class="small-tip">
                  <p>随时随地将手机中的素材同步云端，</p>
                  <p>在web端完成剪辑，中长视频轻松做</p>
                </div>
              </div>
            </div>
            <div class="bg" style="--r: 120">
              <img src="../../assets/home/slide/4_1.png" />
              <div class="description">
                <div class="small-title">电商种草</div>
                <div class="small-tip">
                  <p>可商用的电商风格素材、视频空境，</p>
                  <p>助力你的产品宣传和市场营销</p>
                </div>
              </div>
            </div>
            <div class="bg" style="--r: 160">
              <img src="../../assets/home/slide/5_1.png" />
              <div class="description">
                <div class="small-title">直播引流</div>
                <div class="small-tip">
                  <p>直播间高光片段轻松剪辑，配合动效贴纸，</p>
                  <p>快速制作引流视频</p>
                </div>
              </div>
            </div>
            <div class="bg" style="--r: 200">
              <img src="../../assets/home/slide/6_1.png" />
              <div class="description">
                <div class="small-title">横竖转换</div>
                <div class="small-tip">
                  <p>横版视频转竖版，一套素材，</p>
                  <p>轻松完成多平台尺寸适配</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="more-func">
        <div class="title">
          <span>更多功能</span>
          <span>敬请期待</span>
        </div>
        <div class="big-container">
          <div class="text">
            <div class="title">模板创作</div>
            <div class="tip">
              <span>简单易用、快速上手的模板视频创作工具平台</span>
              <span>海量模板，满足商业和个人需求，助力你的精彩创作</span>
            </div>
          </div>
          <img src="../../assets/home/func/个人空间clip.png" />
        </div>
        <div class="small-container">
          <div class="small-box">
            <img src="../../assets/home/func/toolbox.png" />
            <div class="title">创作工具箱</div>
            <div class="tip">
              丰富的工具能力，帮你快速生成、处理索材，提升创作效率
            </div>
          </div>
          <div class="small-box">
            <img src="../../assets/home/func/category.png" />
            <div class="title">团队资产管理</div>
            <div class="tip">
              全场景支持草稿和素材的共享，团队资产随时取用，与你的创意团队协作大幕
            </div>
          </div>
        </div>
      </div>
      <div class="end-enter">
        <div class="into-title">立即注册，享受畅快场景编辑与协作体验</div>
        <div class="enter-button" @click="enterLogin()">登录/注册</div>
      </div>
    </div>
    <div class="footer">
      <div class="copyright">版权信息</div>
    </div>
  </div>
</template> -->

<script setup lang="ts">
// import { ArrowDownOutlined, ArrowRightOutlined } from "@ant-design/icons-vue";
// import { text } from "stream/consumers";
// import { usePermissionStore } from "@/stores/permissionStore";
// import router from "@/router";
// import { ref } from "vue";
// const usePermission = usePermissionStore();
// const peosonInfo = () => {
//   router.push("/userInfo");
// };

// const logout = () => {
//   usePermission.logout();
// };

// const goScence = (): void => {
//   router.push("/scence");
// };
// const enterLogin = (): void => {
//   router.push("/login");
// };
// const goWorkingSpace = (): void => {
//   router.push("/user");
// };
</script>
