import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

//Test Suites       测试集
describe('HelloWorld.vue', () => {
  //test            测试项
  it('试试h1的文字', () => {
    //让组件独立存在
    const Constructor = Vue.extend(HelloWorld)
    //挂载到虚拟DOM
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.title').textContent)
      .toEqual('blue')
  })

  //test
  it('li的生成', () => {
    //让组件独立存在
    const Constructor = Vue.extend(HelloWorld)
    //挂载到虚拟DOM
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelectorAll('.box').length)
      .toEqual(4)
  })

  //
  it('测试显示隐藏', () => {
    //让组件独立存在
    const Constructor = Vue.extend(HelloWorld)
    //挂载到虚拟DOM
    const vm = new Constructor().$mount()

    vm.fn(2)
    expect(vm.$el.querySelectorAll('.box').length)
      .toEqual(4)

    expect(vm.$el.querySelectorAll('.box')[0].textContent)
      .toEqual('0')
    expect(vm.$el.querySelectorAll('.box')[1].textContent)
      .toEqual('1')
    expect(vm.$el.querySelectorAll('.box')[2].textContent)
      .toEqual('2')
  })
})
