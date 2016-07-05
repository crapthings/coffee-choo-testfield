_taggedTemplateLiteral = (strings, raw) ->
  Object.freeze Object.defineProperties(strings, raw: value: Object.freeze(raw))

'use strict'
_templateObject = _taggedTemplateLiteral([
  '\n  <main>\n    <h1>'
  '</h1>\n    <input\n      type="text"\n      oninput='
  '>\n  </main>\n'
], [
  '\n  <main>\n    <h1>'
  '</h1>\n    <input\n      type="text"\n      oninput='
  '>\n  </main>\n'
])
choo = require('choo')
app = choo()
app.model
  state: title: 'Set the title'
  reducers: update: (action, state) ->
    { title: action.value }

mainView = (params, state, send) ->
  choo.view _templateObject, state.title, (e) ->
    send 'update', value: e.target.value

app.router (route) ->
  [ route('/', mainView) ]
tree = app.start()
document.body.appendChild tree

# ---
# generated by js2coffee 2.2.0