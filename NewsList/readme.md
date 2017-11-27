
# Mobile Components: NewsList API

## Usage

`import { NewsList } from '@avoine/mobile-components'`

or

`import { defaultStyles, NewsList } from '@avoine/mobile-components'`

or

`import { NewsItemScreen } from '@avoine/mobile-components'`


## Components

- [`<NewsList />`](#NewsList)
- [`<NewsItem />`](#NewsItem)
- [`<NewsItemScreen />`](#NewsItemScreen)


## <a name="NewsList"></a>`<NewsList />` Component API

### Props

| Prop | Type | Default | Note |
|---|---|---|---|
| `items` | Array of Objects | | Items to be viewed in `<NewsItem />` components. See [NewsItem](#NewsItem). |
| `style` | Object | | Styles for `<NewsList />` and childs. |
| `map` | Object | | Map for mapping property names in `items` to property names required by `<NewsItem />`.<br><br>Example:<br>To map `item.img` to `item.image`, map would be `{image: 'img'}`.
| `navigation` | Object | | Navigation object. This is used for opening `<NewsItemScreen />` for displaying single items.
| `convertDate` | function | Function for converting date to timestamp with milliseconds (= unix timestamp * 1000) |

### Types

#### `items`

An array of objects with following properties:

| Prop | Type |
|---|---|
| `id` | String |
| `title` | String |
| `summary` | String |
| `body` | String |
| `image` | String |
| `thumbnail` | String |
| `date` | String |
| `url` | String |
| `tags` | Array of string |

### Examples

```
import { defaultStyles, NewsList } from '@avoine/mobile-components'

const newsItems = [
  {
    id: '2',
    title: 'This just out',
    summary: 'Something interesting is happening right now.',
    body: 'Lorem ipsum dolor sit amet.',
    image: 'https://example.com/assets/img/foo.jpg',
    thumbnail: 'https://example.com/assets/img/foo_thumbnail.jpg',
    date: '21.11.2017',
    url: 'https://example.com/related_url/',
    tags: ['tag1', 'tag2'],
  },
  {
    id: '1',
    title: 'Another title',
    summary: 'Oh, this should really interest you',
    body: 'Lorem ipsum dolor sit amet.',
    image: 'https://example.com/assets/img/foo2.jpg',
    thumbnail: 'https://example.com/assets/img/foo2_thumbnail.jpg',
    date: '20.11.2017',
    url: 'https://example.com/related_url/',
    tags: ['tag1'],
  },
];

...

<NewsList
  items={newsItems}
  style={defaultStyles}
  navigation={navigation}
>
```


# <a name="NewsItem"></a>`<NewsItem />` Component API

## Props

Coming soon.

## Types

Coming soon.

## Examples

Coming soon.


# <a name="NewsItemScreen"></a>`<NewsItemScreen />` Component API

Component for displaying single news item on dedicated screen.

## Props

Coming soon.

## Types

Coming soon.

## Examples

Coming soon.