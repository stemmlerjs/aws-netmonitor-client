
const SOME_ACTION_OCCURRED = 'SOME_ACTION_OCCURRED'

// =======================================================
// ================== ACTIONS CREATORS ===================
// =======================================================


export function someActionOccurred() {
   return {
      type: SOME_ACTION_OCCURRED
   }
}
// =======================================================
// ================== INITIAL STATE ======================
// =======================================================

const initialDashboardState = {
	title: 'Hello World',
	actionOccurred: false
}

// =======================================================
// ===================== REDUCERS ========================
// =======================================================



export default function dashboard(state = initialDashboardState, action) {
	switch(action.type) {
		case SOME_ACTION_OCCURRED:
			return {
				...state,
				actionOccurred: true
			}
		default:
			return state
	}
}
