import { Component, getAssetPath, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-profile-image',
  styleUrl: 'app-profile-image.css',
  shadow: true,
})
export class AppProfileImage {

  @Prop() image = "blank-profile-picture-973460_640.png";

  render() {
    const imageSrc = getAssetPath(`/assets/profile/${this.image}`);
    return <img src={imageSrc} />
  }

}
