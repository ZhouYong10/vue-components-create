<template>
  <div id="app">
    <!--    <img src="./assets/logo.png" />-->
    <!--    <div>-->
    <!--      <p>-->
    <!--        If Element is successfully added to this project, you'll see an-->
    <!--        <code v-text="'<el-button>'"></code>-->
    <!--        below-->
    <!--      </p>-->
    <!--      <el-button>el-button</el-button>-->
    <!--    </div>-->
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->

    <el-container>
      <el-header height="70px" style="background: red">Header</el-header>
      <el-container>
        <el-aside width="200px">
          <div class="scrollbar-style">
            <el-menu
              @close="menuClosed"
              default-active="2"
              class="el-menu-vertical-demo"
            >
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </div>
        </el-aside>
        <el-main style="background: #807474;">
          <vue-native-scrollbar width="100%" height="400px">
            <el-menu
              unique-opened
              default-active="2"
              class="el-menu-vertical-demo"
            >
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
              </el-menu-item>
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="6">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="7">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="8">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="9">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="11">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="12">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="13">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"
                    >分组一</template
                  >
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title"
                    >选项4</template
                  >
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </vue-native-scrollbar>
          <!-- <div class="content-box" ref="contentBox">
            <p>content box</p>
            <p>content box</p>
            <p>content box</p>
            <p>content box</p>
            <p>content box</p>
            <p>content box</p>
            <p>content box</p>
            <p>content box</p>
            <p>content box</p>
            <p>content box</p>
            <p>content box</p>
          </div>
          <div class="border-box" ref="borderBox">
            <p>border box</p>
            <p>border box</p>
            <p>border box</p>
            <p>border box</p>
            <p>border box</p>
            <p>border box</p>
            <p>border box</p>
            <p>border box</p>
            <p>border box</p>
            <p>border box</p>
            <p>border box</p>
          </div>-->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import VueNativeScrollbar from "./components/VueNativeScrollbar.vue";

export default {
  name: "app",
  components: {
    VueNativeScrollbar
  },
  /*mounted() {
    let contentBox = this.$refs.contentBox;
    console.log(window.getComputedStyle(contentBox).width);
    console.log(window.getComputedStyle(contentBox).paddingLeft);
    console.log(window.getComputedStyle(contentBox).paddingRight);
    console.log(window.getComputedStyle(contentBox).boxSizing);
    console.log('width: ', contentBox.getAttribute('css'));
    console.log('clientWidth: ', contentBox.clientWidth);
    console.log('clientHeight: ', contentBox.clientHeight);
    console.log('clientLeft: ', contentBox.clientLeft);
    console.log('clientTop: ', contentBox.clientTop);
    console.log('scrollWidth: ', contentBox.scrollWidth);
    console.log('scrollHeight: ', contentBox.scrollHeight);
    console.log('scrollLeft: ', contentBox.scrollLeft);
    console.log('scrollTop: ', contentBox.scrollTop);

    console.log(' =========================== ');
    let borderBox = this.$refs.borderBox;
    console.log(window.getComputedStyle(borderBox).boxSizing);
    console.log('clientWidth: ', borderBox.clientWidth);
    console.log('clientHeight: ', borderBox.clientHeight);
    console.log('clientLeft: ', borderBox.clientLeft);
    console.log('clientTop: ', borderBox.clientTop);
    console.log('scrollWidth: ', borderBox.scrollWidth);
    console.log('scrollHeight: ', borderBox.scrollHeight);
    console.log('scrollLeft: ', borderBox.scrollLeft);
    console.log('scrollTop: ', borderBox.scrollTop);

  },*/
  methods: {
    menuClosed() {
      let el = this.$refs.menuScrollbar;
      console.log(this.$scrollbar, " -----------------");
      let scrollbar = this.$scrollbar.get(el);
      console.log(scrollbar, " ================");
      // scrollbar.scrollTo(0, 100);
    }
  }
};
</script>

<style>
.content-box {
  box-sizing: content-box;
  width: 200px;
  height: 200px;
  margin: 20px;
  padding: 10px;
  border: 5px solid black;
  background: white;
  overflow: auto;
}
.border-box {
  box-sizing: border-box;
  width: 200px;
  height: 200px;
  margin: 20px;
  padding: 10px;
  border: 5px solid black;
  background: white;
  overflow: auto;
}

.scrollbar-outer {
  height: 600px;
  background: white;
  overflow: hidden;
}
.scrollbar-box {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.scrollbar-content {
}

.el-container {
  height: 100%;
}
.scrollbar-style {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
.scrollbar-style::-webkit-scrollbar {
  width: 4px;
  height: 6px;
  /**/
}
.scrollbar-style::-webkit-scrollbar-track {
  background: rgb(219, 225, 239);
  border-radius: 2px;
}
.scrollbar-style::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 20px;
}
.scrollbar-style::-webkit-scrollbar-thumb:hover {
  background: #333;
}
.scrollbar-style::-webkit-scrollbar-corner {
  background: #9a958d;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
