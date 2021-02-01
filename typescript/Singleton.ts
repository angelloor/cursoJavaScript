class Singleton {
	private static instace: Singleton;

	private constructor() {}

	static getInstance() {
		if (!Singleton.instace) {
			Singleton.instace = new Singleton();
		}
		return Singleton.instace;
	}
}

export default Singleton;
