# @avoine/mobile-components
---

## Install

Install Avoine Mobile Components with

`npm install @avoine/mobile-components --save`


## Usage

Then use with

`import { NewsList } from '@avoine/mobile-components`

---

## Available modules

  - Login
  - NewsList

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

---

### NewsItemScreen

NewsItemScreen is supposed to be opened from \<NewsList>'s child \<NewsItem>.

#### Usage

`import { defaultStyles, NewsItemScreen } from '@avoine/mobile-components'`

#### PropTypes for NewsItemScreen

```
NewsItemScreen.propTypes = {
  navigation: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        newsItem: PropTypes.object.isRequired,
        style: PropTypes.object.isRequired
      })
    })
  })
}
```

---

### NewsList

#### Usage

`import { defaultStyles, NewsList } from '@avoine/mobile-components'`

#### PropTypes for NewsList

```
NewsList.propTypes = {
  newsItems: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.object.isRequired,
  navigation: PropTypes.object
}
```
