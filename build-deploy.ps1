ng build --prod --base-href="/angular-demo/"

# Load WinSCP .NET assembly
Add-Type -Path "WinSCPnet.dll"

# Set up session options
$sessionOptions = New-Object WinSCP.SessionOptions -Property @{
    Protocol = [WinSCP.Protocol]::Sftp
    HostName = "ec2-13-54-76-183.ap-southeast-2.compute.amazonaws.com"
    UserName = "ubuntu"
    SshHostKeyFingerprint = "ssh-ed25519 256 g9c21H4IQKwEtyRkWIf0V2U9k0f11tGFKkK1w0yH51Y="
    SshPrivateKeyPath = "C:\Users\Avin\Documents\EC2-key.ppk"
}

$sessionOptions.AddRawSettings("Shell", "sudo%20su%20-")

$session = New-Object WinSCP.Session

try
{
    # Connect
    $session.Open($sessionOptions)

    # Your code
    result = session.SynchronizeDirectories( SynchronizationMode.Remote,
     "C:\Users\Avin\Documents\GitHub\gms-user-portal\dist\gms-user-portal",
      "/var/www/html/angular-demo/",
       true);

}
finally
{
    $session.Dispose()
}