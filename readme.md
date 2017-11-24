# @avoine/mobile-components
---

## Install

Install Avoine Mobile Components with

`npm install @avoine/mobile-components --save`

---

## Available modules

  - [Login](https://github.com/AvoineOy/mobile-components/blob/master/Login/readme.md)
  - [NewsList](https://github.com/AvoineOy/mobile-components/blob/master/NewsList/readme.md)

---

### Login

#### Usage

`import { Login } from '@avoine/mobile-components`

#### PropTypes for Login

```
Login.propTypes = {
  onLogin: PropTypes.func,
  config: PropTypes.shape({
    Login: PropTypes.shape({
      url: PropTypes.string.isRequired,
      instance: PropTypes.string.isRequired
    })
  }),
  style: PropTypes.object
}
```
