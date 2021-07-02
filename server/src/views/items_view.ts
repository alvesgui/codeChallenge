import Item from "../models/Item";
import images_view from "./images)_view";

export default {
  render(item: Item) {
    return {
      id: item.id,
      name: item.name,
      description: item.description,
      images: images_view.renderMany(item.images),
    };
  },
  renderMany(items: Item[]) {
    return items.map((item) => this.render(item));
  },
};
