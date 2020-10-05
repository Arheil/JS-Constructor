import image from './assets/xfiles.png';
import {
	TextBlock,
	TitleBlock,
	ColumnsBlock,
	ImageBlock
} from './classes/blocks';

const text = `
Крутое видео тут: <a href="" target="_blank">Станислав Верман</a>
`;

export const model = [
	new TitleBlock('Конструктор сайтов на JavaScript', {
		tag: 'h2',
		styles: {
			background: 'linear-gradient(to right, #ff0099, #493240)',
			color: '#fff',
			padding: '1.5 rem',
			'text-align': 'center'
		}
	}),
	new TextBlock(text, {
		styles: {
			background: 'linear-gradient(to left, #f2994a, #f2c94c)',
			padding: '1rem',
			'font-weight': 'bold'
		}
	}),
	new ColumnsBlock([
		'Заголовок колонки 1',
		'Заголовок колонки 2',
		'Заголовок колонки 3'
	], {
		styles: {
			background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
			padding: '2rem',
			color: '#fff',
			'font-weight': 'bold'
		}
	}),
	new ImageBlock(image, {
		styles: {
			padding: '2rem 0',
			display: 'flex',
			'justify-content': 'center'
		},
		imageStyles: {
			width: '500px',
			height: 'auto'
		},
		alt: 'Изображение'
	})

]