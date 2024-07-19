#!/bin/bash

# Define the rules file and the output file
rules_file="/etc/iptables/rules.v4"
output_file="report.json"

# Check if the rules file exists
if [ ! -f "$rules_file" ]; then
    echo "The file $rules_file does not exist."
    exit 1
fi

# Create or empty the output file
echo "{" > "$output_file"

# Read the rules.v4 file line by line
while IFS= read -r line; do
    # Ignore empty lines or comments
    if [[ -z "$line" || "$line" =~ ^# ]]; then
        continue
    fi

    # Clean the line of leading and trailing whitespace and add it to the JSON file
    clean_rule=$(echo "$line" | sed 's/^[ \t]*//;s/[ \t]*$//')
    echo "    \"$clean_rule\": \"present\"," >> "$output_file"
done < "$rules_file"

# Remove the last comma and close the JSON
sed -i '$ s/,$//' "$output_file"
echo "}" >> "$output_file"

echo "iptables rules have been extracted to $output_file."
cat "$output_file"
