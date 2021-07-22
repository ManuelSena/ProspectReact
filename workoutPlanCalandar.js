//import React from 'react';
//import DayPicker, { DateUtils } from 'react-day-picker';
//export default class WorkoutPlanCalendar extends React.Component {
//    constructor(props) {
//        super(props);
//        this.handleDayClick = this.handleDayClick.bind(this);
//        this.state = {
//            selectedDays: [],
//        };
//    }
//    handleDayClick(day, { selected }) {
//        const { selectedDays } = this.state;
//        if (selected) {
//            const selectedIndex = selectedDays.findIndex(selectedDay =>
//                DateUtils.isSameDay(selectedDay, day)
//            );
//            selectedDays.splice(selectedIndex, 1);
//        } else {
//            selectedDays.push(day);
//        }
//        this.setState({ selectedDays });
//    }
//    render() {
//        return (
//            <div>
//                <DayPicker
//                    selectedDays={this.state.selectedDays}
//                    onDayClick={this.handleDayClick}
//                />
//            </div>
//        );
//    }
//}
//# sourceMappingURL=workoutPlanCalandar.js.map