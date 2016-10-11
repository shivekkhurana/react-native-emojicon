##React Native Emojicon
###Emoji Vectors for your react native apps.

#😀😬😁😂😃😄😅😆😇😉

http://imgur.com/a/qymyr

#### Inspiration
While building with react native, it was a common routine to pull in the awesome [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) library, but we already have so many pretty icons, inbuilt into the phone.

Emojis are used widely for communication, how about using them to develop UI ?
And this library came into being.


#### Installation

```
**npm** install react-native-emojicon
```

#### Usage

```
	...
	import Emojicon from 'react-native-emojicon';
	...

	class Emoji extends Component {
	 
		render() {
			return (
				<Emojicon name={'speedboat'} size={50} />
				<Emojicon name={'alarm-clock'} size={50} />
				<Emojicon name={'alarm_clock'} size={50} />
			);
		}
	}
```

##### Emoji Name
The name prop can be a any valid name from the following list :
http://www.fileformat.info/info/emoji/list.htm

Spaces are replaced with hyphen `-` or underscore `_`.
So `alarm clock` from the list can be written as both `alarm-clock` and `alarm_clock` 

##### Licence

The MIT License

Copyright (c) 2010-2016 Shivek Khurana

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
