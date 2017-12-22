import React from 'react'
import { View, Image, ART, TouchableHighlight } from 'react-native'
const { Surface, Shape, Path, Group, Text } = ART
import { PropTypes } from 'prop-types'

export default class MemberCard extends React.Component {

  state = {
    endDegree: 0,
    colors: [
      '#fff',
      '#000',
    ],
    useColor: 0,
    rotation: -90,
    direction: 1,
  }

  constructor(props) {
    super(props);

    setInterval(this.doChanges.bind(this), 4000 / 360)
  }

  doChanges = () => {
    const self = this
    const direction = this.state.direction
    let increment = 1
    const rotation = this.state.rotation
    const endDegree = this.state.endDegree

    if (direction === 1) {
      if (endDegree <= 359) {
        self.setState({
          endDegree: Math.min(self.state.endDegree + increment / 1.125, 359.9999),
          rotation: rotation + increment
        })
      } else {
        self.setState({
          direction: 0,
        })
      }
    } else {
      increment *= -1

      if (endDegree >= 1) {
        self.setState({
          endDegree: Math.max(0, self.state.endDegree + increment / 1.125),
          rotation: rotation + increment * 2 * -1
        })
      } else {
        self.setState({
          direction: 1,
        })
      }
    }
  }

  drawCirclePath = (endDegree) => {
    let p = Path()
    p.move(125, 100);
    //p.path.push(0, 100, 50)
    // ARC, cx, cy, rx, sa, ea, ccw ? 0 : 1
    // sx, sy, ex, ey, cx, cy, rx, ry, sa, ea, ccw, rotation
    p.path.push(4, 100, 100, 25, 0, endDegree * Math.PI / 180, 1)

    return (
      p
    )
  }

  animateBackground = () => {
    console.log('animating background')
  }

  render = () => {
    const bgCircle = this.drawCirclePath(360)
    const p = this.drawCirclePath(this.state.endDegree)
    return (
      <TouchableHighlight onPress={() => this.animateBackground()} style={{ flex: 1 }}>
        <View style={
          {
            flex: 1,
            backgroundColor: '#eee'
          }}>
          <Surface width={300} height={300}>
            <Group rotation={this.state.rotation} originX={100} originY={100}>
              
              <Shape
                d={bgCircle}
                stroke='#fff'
                strokeWidth={20}
                strokeCap='butt'
              />
              
              <Shape
                d={p}
                stroke='#000'
                strokeWidth={20}
                strokeCap='butt'
              />


            </Group>
          </Surface>
        </View>
      </TouchableHighlight>
    )
  }
}

// MemberCard.propTypes = {

// }

// MemberCard.defaultProps = {

// }
