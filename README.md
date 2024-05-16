### 🌱 My Todo List - 항해99 리부트 입문과제 1
##### [🌱 배포 링크](https://hanghae-reboot-lv1.vercel.app/)
------
  <br />

1. **JSX 문법**이란 무엇일까요?
  * `JavaScript 파일 내에 HTML과 유사한 마크업을 작성할 수 있게 해주는 JavaScript를 확장한 문법`
  <br />

2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이들과 같은 **애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요**?
  * `useState 사용 `
  <br />
3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?

 * `상위 컴포넌트에서 하위 컴포넌트로 props를 내려주는 방식으로 공유 `
   <br />
4. 기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.
   ```
    // 추가 버튼 클릭
    const onSubmitHandler = (e) => {
      e.preventDefault();
      const newTodo = {
        id: todo.length + 1,
        title,
        body,
        isDone: false,
      };

      setTodo([...todo, newTodo]);
      setTitle("");
      setBody("");
    };
    ```
  * 투두리스트 추가를 위해 전개 연산자를 사용하여 불변성 유지
  <br />
5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**
   
  * `코드의 가독성이 좋아짐`
  * `어떤 기능을 하는 컴포넌트인지 알 수 있음`