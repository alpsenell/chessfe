import { createPinia } from 'pinia'
import { mount } from 'cypress/vue'
import '/src/styles/index.scss'

Cypress.Commands.add('mount', (component, ...args) => {
  args.global = args.global || {}
  args.global.plugins = args.global.plugins || []
  args.global = args.global || {}
  args.global.stubs = args.global.stubs || {}
  args.global.stubs['transition'] = false
  args.global.components = args.global.components || {}
  args.global.plugins.push(createPinia())

  return mount(component, args)
})
