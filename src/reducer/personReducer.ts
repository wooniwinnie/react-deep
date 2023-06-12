export type Person = {
    name: string;
    title: string;
    mentors: [];
};

export type Mentor = {
    name: string;
    title: string;
};

export type ActionType = {
    prev: string;
    current: string;
};

type Action = 'CHANGE' | 'ADD' | 'DELETE';

function personReducer(person: Person, action: Action) {
    switch (action) {
        case 'CHANGE':
            const { prev, current } = action;
            return {
                ...person,
                mentors: person.mentors.map((mentor: Mentor) => {
                    if (mentor.name === prev) {
                        // fallback value 추가
                        // 사용자가 입력을 취소하면 null을 반환하기 때문에 타입오류 발생하는 것을 방지하기 위함!
                        return { ...mentor, name: current || '' };
                    }
                    return mentor;
                }),
            };
        case 'ADD':
            const { name, title } = action;
            return {
                ...person,
                mentors: [
                    ...person.mentors,
                    { name: name || '', title: title || '' },
                ],
            };

        case 'DELETE':
            const { name } = action;
            return {
                ...person,
                mentors: person.mentors.filter((m: Mentor) => m.name !== name),
            };
        default:
            return Error(`알 수 없는 에러가 발생함 ${action}`);
    }
}

export default personReducer;
