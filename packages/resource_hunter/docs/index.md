---
layout: home

hero:
  name: 资源猎人
  text: 不同平台的资源，统一接口设计和规范
  tagline: 针对腾讯、芒果、爱奇艺、优酷等平台的资源提供标准化接口
  actions:
    - theme: brand
      text: 说明
      link: /guide/define
    - theme: alt
      text: 接口定义
      link: /guide/discover
  image:
    src: /logo.png
    alt: 资源猎人
    style: "border-radius: 0 0 80px 80px"

features:
  - icon: 📚
    title: 统一接口设计
    details: 发现接口、搜索接口、详情接口、剧集接口、解析接口，统一设计，规范使用。
  - icon: 📝
    title: 字段说明
    details: 规范了接口用到的字段，进行统一设计和规范，方便开发者理解和使用。
  - icon: 🎯
    title: 多平台资源整合
    details: 支持腾讯、芒果、爱奇艺、优酷等多个平台，未来将支持更多平台。
  - icon: 🛠️
    title: TypeScript 实现示例
    details: 提供 TypeScript 实现的接口示例，方便开发者参考。
  - icon: 🚀
    title: 灵活的扩展能力
    details: 支持灵活扩展，新增平台或功能时，遵循统一接口设计，轻松集成。
---
<style>
:root {
  --vp-home-hero-name-color: transparent !important;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd77d2 30%, #4d8eca) !important;

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd77d2 50%, #4d8eca 50%) !important;
  --vp-home-hero-image-filter: blur(44px) !important;
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px) !important;
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px) !important;
  }
}
</style>