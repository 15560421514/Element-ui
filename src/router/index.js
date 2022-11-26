import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Layout',
    name: 'Layout',
    component:()=>import('../views/Layout.vue')
  },
  {
    path: '/Container',
    name: 'Container',
    component:()=>import("../views/Container.vue")
  },
  {
    path: '/icon---link',
    name: 'icon---link',
    component:()=>import("../views/icon---link.vue")
  },
  {
    path: '/Button',
    name: 'Button 按钮',
    component:()=>import("../views/Button.vue")
  },
  {
    path: '/Radio--Checkbox',
    name: 'Radio--Checkbox',
    component:()=>import("../views/Radio--Checkbox.vue")
  },
  {
    path: '/Input',
    name: 'Input',
    component:()=>import("../views/Input.vue")
  },
  {
    path: '/InputNumber',
    name: 'InputNumber',
    component:()=>import("../views/InputNumber.vue")
  },
  {
    path: '/Select',
    name: 'Select',
    component:()=>import("../views/Select.vue")
  },
  {
    path: '/Cascader',
    name: 'Cascader',
    component:()=>import("../views/Cascader.vue")
  },
  {
    path: '/Switch',
    name: 'Switch',
    component:()=>import("../views/Switch.vue")
  },
  {
    path: '/Slider',
    name: 'Slider',
    component:()=>import("../views/Slider.vue")
  },
  {
    path: '/TimePicker',
    name: 'TimePicker',
    component:()=>import("../views/TimePicker.vue")
  },
  {
    path: '/Form',
    name: 'Form',
    component:()=>import("../views/Form.vue")
  },
  {
    path: '/DatePicker ',
    name: 'DatePicker ',
    component:()=>import("../views/DatePicker.vue")
  },
  {
    path: '/Upload ',
    name: 'Upload ',
    component:()=>import("../views/Upload.vue")
  },
  {
    path: '/Rate',
    name: 'Rate',
    component:()=>import("../views/Rate.vue")
  },
  {
    path: '/ColorPicker',
    name: 'ColorPicker',
    component:()=>import("../views/ColorPicker.vue")
  },
  {
    path: '/Transfer',
    name: 'Transfer',
    component:()=>import("../views/Transfer.vue")
  },
]

const router = new VueRouter({
  routes
})

export default router
