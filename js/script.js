function generateOutput() {
  const id = document.getElementById("employeeId").value.trim();
  const name = document.getElementById("employeeName").value.trim();
  const email = document.getElementById("employeeEmail").value.trim();
  const purpose = document.getElementById("purpose").value.trim();
  const tool = document.querySelector('input[name="tool"]:checked');

  if (!id || !name || !email || !purpose || !tool) {
    alert("모든 필드를 입력하고 도구를 선택해주세요.");
    return;
  }

  const toolName = tool.value;
  let subscriptionInfo = "";

  if (toolName === "MS Office") {
    subscriptionInfo =
      "Microsoft Office 365 Subscription: $99 / user / annually";
  } else if (toolName === "Adobe Acrobat") {
    subscriptionInfo = "Adobe Acrobat Subscription: $14.99 / user / monthly";
  } else if (toolName === "Adobe Illerustrator Pro") {
    subscriptionInfo =
      "Adobe Illerustrator Pro Subscription: $44.49 / user / monthly";
  } else if (toolName === "Apple Business Essentials") {
    subscriptionInfo = "Apple Business Essentials: $2.99 / user / monthly";
  } else if (toolName === "Power BI") {
    subscriptionInfo = "Power BI: $20 / user / monthly";
  } else if (toolName === "Figma") {
    subscriptionInfo = "Figma: $?? / user / ?????";
  }

  const result = `The following employee is requesting ${toolName} for his/her daily task
  
  Purpose of Request:
  ${purpose}
  
  Employee ID: ${id}
  Employee Name: ${name}
  Employee email: ${email}
  
  ${subscriptionInfo}`;

  document.getElementById("output").innerText = result;
}

document.getElementById("copyButton").addEventListener("click", function () {
  const text = document.getElementById("output").innerText;

  navigator.clipboard.writeText(text).then(() => {
    const message = document.createElement("div");
    message.innerText = "COPIED!";
    message.style.position = "fixed";
    message.style.top = "20px";
    message.style.right = "20px";
    message.style.backgroundColor = "#333";
    message.style.color = "#fff";
    message.style.padding = "10px 15px";
    message.style.borderRadius = "5px";
    message.style.zIndex = 9999;
    message.style.boxShadow = "0 2px 6px rgba(0,0,0,0.2)";
    document.body.appendChild(message);

    setTimeout(() => {
      message.remove();
    }, 2000);
  });
});
