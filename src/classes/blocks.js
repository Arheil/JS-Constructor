import {
	col,
	css,
	row
} from '../utils'

class Block {
	constructor(type, value, options) {
		this.type = type
		this.value = value
		this.options = options
	}

	toHTML() {
		throw new Error('Метод toHTML должен быть реализован')
	}
}

export class TitleBlock extends Block {
	constructor(value, options) {
		super('title', value, options);
	}
	toHTML() {
		const tag = (!block.options.tag) ? 'h1' : block.options.tag;
		const styles = this.options;
		return row(col(`<${tag}>${this.value}</${tag}>`), css(styles));
	}
}

export class TextBlock extends Block {
	constructor(value, options) {
		super('text', value, options);
	}
}

export class ColumnsBlock extends Block {
	constructor(value, options) {
		super('columns', value, options);
	}
}

export class ImageBlock extends Block {
	constructor(value, options) {
		super('image', value, options);
	}
}