# `03` Validate your work

We have developed a script to help you measure your success during this project.

In the `.learn/assets` folder, you will find the script [check-rules.sh](https://github.com/breatheco-de/configuring-firewall-and-acl-exercise-tutorial/blob/main/.learn/assets/check-rules.sh) that you should copy and paste to the desktop of your Debian virtual machine.

## 1. Run the Script
Once you have pasted the script [check-rules.sh](https://github.com/breatheco-de/configuring-firewall-and-acl-exercise-tutorial/blob/main/.learn/assets/check-rules.sh) on your Debian machine, open the terminal and navigate to the directory where the script is located, in our case `./Desktop`, and make the script executable (if it isn't already). This can be done using the `chmod` command:

```sh
chmod +x check-rules.sh
```

Run the script by specifying its name. You may also need to provide any necessary arguments. Assuming no additional arguments are needed for this example, you should run:

```sh
./check-rules.sh
```

## 2. Upload Your Results

Running the script will create a `report.json` file that you need to copy and paste into the root of these LearnPack exercises for validation.

> 💡 Note: Paste it at the same level as the `learn.json` file.

## 3. Run the Test

Once you have pasted the report.json file in the root of the LearnPack exercises, you can run the test to validate your work.

![test image](https://raw.githubusercontent.com/breatheco-de/configuring-firewall-and-acl-exercise-tutorial/main/.learn/assets/script-test.png)

## 4. Done!
You have effectively protected your WordPress server through basic and advanced configurations with iptables.

If you encounter any issues, feel free to reach out to a mentor or use the other support channels provided by 4Geeks.
