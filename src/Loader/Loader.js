import template from './Loader.hbs';
import './Loader.scss';

/**
 * Лоадер
 */
class Loader {
	#id;
	#parent;
	#size;
	#style;

	/**
	 * Конструктор класса
	 * @param {Element} parent - родительский элемент
	 * @param {object} params - параметры компонента
	 * @param {number} params.id - id элемента
	 * @param {'s' | 'm' | 'l' | 'xl'} params.size - размер лоадера
	 * @param {'primary' | 'secondary'} params.style - размер лоадера
	 */
	constructor(parent, { id = '', size = 's', style = 'primary' }) {
		this.#id = id;
		this.#parent = parent;
		this.#size = size;
		this.#style = style;
	}

	/**
	 * Рендеринг компонента
	 */
	render() {
		this.#parent.insertAdjacentHTML('beforeend', template({ id: this.#id, size: this.#size, style: this.#style }));
	}
}

export default Loader;
