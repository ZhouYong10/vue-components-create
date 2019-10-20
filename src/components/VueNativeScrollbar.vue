<template>
  <div
    class="vue-native-scrollbar"
    ref="elWindow"
    :style="{
      width: width,
      height: height,
      overflow: 'hidden',
      background: '#fff'
    }"
  >
    <div
      class="vue-native-scrollbar-show"
      ref="elBarBox"
      :style="{
        width: scrollbarShowWidth + 'px',
        height: height,
        overflowX: scrollbarShowOverflowX,
        overflowY: scrollbarShowOverflowY
      }"
    >
      <div
        class="vue-native-scrollbar-content"
        ref="elCont"
        :style="{ width: width, height: 'auto' }"
      >
        <slot>
          vue-native-scrollbar's contents is writing here.
        </slot>
      </div>
    </div>
    <div
      class="scrollbar-track"
      :style="{
        height: height,
        width: trackWidth + 'px',
        background: trackColor
      }"
    ></div>
    <div
      class="scrollbar-thumb"
      :style="{
        width: thumbWidth + 'px',
        height: thumbHeight + 'px',
        background: thumbColor,
        top: thumbTop + 'px',
        right: thumbRight + 'px'
      }"
    ></div>
  </div>
</template>

<script>
import { ResizeSensor } from "css-element-queries";
function getScrollWidth() {
  var noScroll,
    scroll,
    oDiv = document.createElement("DIV");
  oDiv.style.cssText =
    "position:absolute; top:-1000px; width:100px; height:100px; overflow:hidden;";
  noScroll = document.body.appendChild(oDiv).clientWidth;
  oDiv.style.overflowY = "scroll";
  scroll = oDiv.clientWidth;
  document.body.removeChild(oDiv);
  return noScroll - scroll;
}
function getStyle(el, style) {
  return window.getComputedStyle(el)[style];
}
const MutationObserver = window.MutationObserver;
export default {
  name: "VueNativeScrollbar",
  props: {
    width: {
      type: String,
      default: function() {
        return "100%";
      }
    },
    height: {
      type: String,
      default: function() {
        return "100%";
      }
    }
  },
  data: function() {
    return {
      scrollbarShowWidth: 0,
      scrollbarShowOverflowX: "hidden",
      scrollbarShowOverflowY: "auto",
      trackWidth: 6,
      trackColor: "#D7D7D7",
      thumbWidth: 4,
      thumbHeight: 0,
      thumbTop: 0,
      thumbColor: "#9E9E9E"
    };
  },
  computed: {
    thumbRight() {
      return (parseInt(this.trackWidth) - parseInt(this.thumbWidth)) / 2;
    }
  },
  mounted() {
    let mv = this;
    let elWindow = mv.$refs.elWindow;
    let elBarBox = mv.$refs.elBarBox;
    let elCont = mv.$refs.elCont;
    mv.scrollbarShowWidth = elWindow.clientWidth + getScrollWidth();
    let windowHeight = elWindow.clientHeight;
    mv.thumbHeight = windowHeight * (windowHeight / elCont.clientHeight);

    new ResizeSensor(elWindow, function({ width, height }) {
      mv.scrollbarShowWidth = width + getScrollWidth();
    });

    new ResizeSensor(elBarBox, function({ width, height }) {
      console.log("elBarBox: ", width, height);
    });

    new ResizeSensor(elCont, function({ width, height }) {
      let windowHeight = elWindow.clientHeight;
      mv.thumbHeight = windowHeight * (windowHeight / height);
    });

    elBarBox.onscroll = function() {
      mv.thumbTop =
        (elBarBox.scrollTop / elCont.clientHeight) * elWindow.clientHeight;
    };
  }
};
</script>

<style scoped>
.vue-native-scrollbar {
  position: relative;
}
.scrollbar-track {
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 4px;
}
.scrollbar-thumb {
  position: absolute;
  border-radius: 2px;
}
.scrollbar-thumb:hover {
  background: #5f5a5b !important;
}
</style>
