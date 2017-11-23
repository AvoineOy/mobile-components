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
  - NewsItemScreen
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
        item: PropTypes.object.isRequired,
        style: PropTypes.shape({
          NewsList: PropTypes.shape({
            NewsItemScreen: PropTypes.shape({
              view: PropTypes.object.isRequired,
              imageContainer: PropTypes.object.isRequired,
              image: PropTypes.object.isRequired,
              imageMissingText: PropTypes.object.isRequired,
              title: PropTypes.object.isRequired,
              ingress: PropTypes.object.isRequired,
              body: PropTypes.object.isRequired,
            }).isRequired
          })
        }).isRequired,
      })
    })
  })
}
```

---

### NewsList

#### Usage

```
import { defaultStyles, NewsList } from '@avoine/mobile-components'

...
render() {
  return (
    <NewsList
      items={myItems}
      style={styles}
      navigation{navigation}
      map={{id: 'news_item_id', date: 'created_date'}}
    />
  )
}
...

```

#### PropTypes for NewsList

```
NewsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  style: PropTypes.shape({
    NewsList: PropTypes.shape({
      NewsItem: PropTypes.shape({
        view: PropTypes.object.isRequired,
        imageContainer: PropTypes.object.isRequired,
        image: PropTypes.object.isRequired,
        imageMissingText: PropTypes.object.isRequired,
        title: PropTypes.object.isRequired,
        ingress: PropTypes.object.isRequired,
      }).isRequired,
      NewsItemScreen: PropTypes.shape({
        view: PropTypes.object.isRequired,
        imageContainer: PropTypes.object.isRequired,
        image: PropTypes.object.isRequired,
        imageMissingText: PropTypes.object.isRequired,
        title: PropTypes.object.isRequired,
        ingress: PropTypes.object.isRequired,
        body: PropTypes.object.isRequired,
      }).isRequired
    })
  }).isRequired,
  navigation: PropTypes.object.isRequired,
  map: PropTypes.object
}
```
